// import { Card } from "@mui/material";
// import React from "react";
// import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
// function Complaints() {
//   return (
//     <Card
//       className="flex flex-col w-[15%] p-2 space-y-2 rounded-md"
//       sx={{ color: "gray" }}
//     >
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">1</div>
//         <div className="rounded-full bg-cyan-950 p-0.5 text-white">
//           <LocalPostOfficeIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">Total Complaints</div>
//     </Card>
//   );
// }

// export default Complaints;
import { Card } from "@mui/material";
import React from "react";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

function Complaints() {
  return (
    <Card
      className="flex flex-col w-[15%] p-4 space-y-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
      sx={{ color: "gray" }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-5xl text-gray">{1}</div>{" "}
        {/* White text for better visibility */}
        <div className="rounded-full bg-white p-2 shadow-md">
          <LocalPostOfficeIcon fontSize="large" style={{ color: "#1e3a8a" }} />
        </div>
      </div>
      <div className="text-sm text-center text-gray">Total Complaints</div>{" "}
      {/* White text for contrast */}
    </Card>
  );
}

export default Complaints;
