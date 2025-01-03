// import BusinessIcon from "@mui/icons-material/Business";
// import { useEffect, useState } from "react";
// function BlockCount() {
//   const [blockCounts, setBlockCounts] = useState(0);
//   useEffect(() => {
//     const fetchBlockCounts = async () => {
//       try {
//         const jwtToken = localStorage.getItem("jwt");
//         const response = await fetch("http://localhost:8082/api/getAllFlats", {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch flats");
//         const flats = await response.json();
//         const blockSet = new Set();
//         flats.forEach((flat) => {
//           if (flat.flatNo && typeof flat.flatNo === "string") {
//             const blockName = flat.flatNo[0];
//             blockSet.add(blockName);
//           }
//         });
//         setBlockCounts(blockSet.size);
//       } catch (error) {
//         console.error("Error fetching block counts:", error);
//       }
//     };
//     fetchBlockCounts();
//   }, []);
//   // console.log(blockCounts)
//   return (
//     <div className="flex flex-col w-[20%] p-2 space-y-3 bg-orange-200 rounded-md text-orange-600">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{blockCounts}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <BusinessIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">Total number of blocks</div>
//     </div>
//   );
// }
// export default BlockCount;
import BusinessIcon from "@mui/icons-material/Business";
import { useEffect, useState } from "react";

function BlockCount() {
  const [blockCounts, setBlockCounts] = useState(0);

  useEffect(() => {
    const fetchBlockCounts = async () => {
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await fetch("http://localhost:8082/api/getAllFlats", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch flats");
        const flats = await response.json();
        const blockSet = new Set();
        flats.forEach((flat) => {
          if (flat.flatNo && typeof flat.flatNo === "string") {
            const blockName = flat.flatNo[0];
            blockSet.add(blockName);
          }
        });
        setBlockCounts(blockSet.size);
      } catch (error) {
        console.error("Error fetching block counts:", error);
      }
    };
    fetchBlockCounts();
  }, []);

  return (
    <div className="flex flex-col w-[20%] p-4 space-y-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white shadow-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="font-sans font-extrabold text-5xl">{blockCounts}</div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <BusinessIcon fontSize="large" style={{ color: "#FF6347" }} />
        </div>
      </div>
      <div className="text-sm text-center">Total number of blocks</div>
    </div>
  );
}

export default BlockCount;
