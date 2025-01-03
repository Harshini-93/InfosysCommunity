// import React, { useEffect, useState } from "react";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

// function SocietyPeopleCount() {
//   const [residentCount, setResidentCount] = useState(null);
//   useEffect(() => {
//     const fetchResidentCount = async () => {
//       try {
//         const jwtToken = localStorage.getItem("jwt");
//         const response = await fetch("http://localhost:8082/api/residents", {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) throw new Error("Failed to fetch flats");
//         const data = await response.json();
//         setResidentCount(data.length);
//       } catch (error) {
//         console.error("Error fetching flat count:", error);
//       }
//     };
//     fetchResidentCount();
//   });
//   return (
//     <div className="flex flex-col w-[20%] p-2 space-y-3 bg-violet-300 rounded-md text-violet-600">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{residentCount}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <PeopleAltIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">
//         Total number of People In the Society
//       </div>
//     </div>
//   );
// }

// export default SocietyPeopleCount;
import React, { useEffect, useState } from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function SocietyPeopleCount() {
  const [residentCount, setResidentCount] = useState(null);

  useEffect(() => {
    const fetchResidentCount = async () => {
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await fetch("http://localhost:8082/api/residents", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch flats");
        const data = await response.json();
        setResidentCount(data.length);
      } catch (error) {
        console.error("Error fetching flat count:", error);
      }
    };
    fetchResidentCount();
  }, []); // Added dependency array to run effect only once after mount

  return (
    <div className="flex flex-col w-[20%] p-4 space-y-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl text-white shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="font-sans font-extrabold text-5xl">{residentCount}</div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <PeopleAltIcon fontSize="large" style={{ color: "#FF6347" }} />
        </div>
      </div>
      <div className="text-sm text-center">
        Total number of People In the Society
      </div>
    </div>
  );
}

export default SocietyPeopleCount;
