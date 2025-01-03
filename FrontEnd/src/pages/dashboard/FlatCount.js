// import React, { useEffect, useState } from "react";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// function FlatCount() {
//   const [flatCount, setFlatCount] = useState(null);
//   useEffect(() => {
//     const fetchFlatCount = async () => {
//       try {
//         const jwtToken = localStorage.getItem("jwt");
//         const response = await fetch("http://localhost:8082/api/getAllFlats", {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch flats");
//         const data = await response.json();
//         setFlatCount(data.length);
//       } catch (error) {
//         console.error("Error fetching flat count:", error);
//       }
//     };
//     fetchFlatCount();
//   });
//   return (
//     <div className="flex flex-col w-[20%] p-2 space-y-3 bg-blue-300 rounded-md text-blue-600">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{flatCount}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <AccountBalanceIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">Total number of Flats</div>
//     </div>
//   );
// }

// export default FlatCount;
import React, { useEffect, useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function FlatCount() {
  const [flatCount, setFlatCount] = useState(null);

  useEffect(() => {
    const fetchFlatCount = async () => {
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await fetch("http://localhost:8082/api/getAllFlats", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch flats");
        const data = await response.json();
        setFlatCount(data.length);
      } catch (error) {
        console.error("Error fetching flat count:", error);
      }
    };
    fetchFlatCount();
  }, []); // Added dependency array to run the effect once

  return (
    <div className="flex flex-col w-[20%] p-4 space-y-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl text-white shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="font-sans font-extrabold text-5xl">{flatCount}</div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <AccountBalanceIcon fontSize="large" style={{ color: "#FF6347" }} />
        </div>
      </div>
      <div className="text-sm text-center">Total number of Flats</div>
    </div>
  );
}

export default FlatCount;
