// import React from "react";
// import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
// function TotalComplaints({ complaintsTotal }) {
//   return (
//     <div className="flex flex-col p-2 space-y-3 bg-pink-200 rounded-md text-pink-600  h-[100px]">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{complaintsTotal}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <SimCardAlertIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">Total no of Complaints</div>
//     </div>
//   );
// }

// export default TotalComplaints;
import React from "react";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";

function TotalComplaints({ complaintsTotal }) {
  return (
    <div className="flex flex-col w-[200px] p-4 space-y-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-3xl">{complaintsTotal}</div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <SimCardAlertIcon fontSize="large" style={{ color: "#FF6347" }} />
        </div>
      </div>
      <div className="text-xs text-center">Total number of Complaints</div>
    </div>
  );
}

export default TotalComplaints;
