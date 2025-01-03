// import React from "react";
// import TaskAltIcon from "@mui/icons-material/TaskAlt";
// function ComplaintsSolved({ solvedComplaints }) {
//   return (
//     <div className="flex flex-col p-2 space-y-3 bg-green-200 rounded-md text-green-600  h-[100px]">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{solvedComplaints}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <TaskAltIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">Total no of Complaints Solved</div>
//     </div>
//   );
// }

// export default ComplaintsSolved;
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function ComplaintsSolved({ solvedComplaints }) {
  return (
    <div className="flex flex-col w-[200px] p-4 space-y-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-3xl">{solvedComplaints}</div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <TaskAltIcon fontSize="large" style={{ color: "#32CD32" }} />
        </div>
      </div>
      <div className="text-xs text-center">
        Total number of Complaints Solved
      </div>
    </div>
  );
}

export default ComplaintsSolved;
