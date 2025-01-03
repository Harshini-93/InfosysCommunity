// import React from "react";
// import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
// function BlockAComplaints({ complaintsBlockA }) {
//   return (
//     <div className="flex flex-col  p-2 space-y-3 bg-sky-200 rounded-md text-sky-600  h-[100px]">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{complaintsBlockA}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <SimCardAlertIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">
//         Total no of Complaints in Block A
//       </div>
//     </div>
//   );
// }

// export default BlockAComplaints;
import React from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem"; // Appropriate icon for complaints

function BlockAComplaints({ complaintsBlockA }) {
  return (
    <div className="flex flex-col w-[200px] p-4 space-y-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="font-sans font-extrabold text-3xl">
          {complaintsBlockA}
        </div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <ReportProblemIcon fontSize="large" style={{ color: "#FF6347" }} />
        </div>
      </div>
      {/* Footer */}
      <div className="text-xs text-center">
        Total number of Complaints in Block A
      </div>
    </div>
  );
}

export default BlockAComplaints;
