// import React from "react";
// import NoteAltIcon from "@mui/icons-material/NoteAlt";
// function ComplaintsUnsolved({ unsolvedComplaints }) {
//   return (
//     <div className="flex flex-col p-2 space-y-3 bg-red-200 rounded-md text-red-600 h-[100px]">
//       <div className="flex flex-row justify-between items-center">
//         <div className="font-bold text-4xl">{unsolvedComplaints}</div>
//         <div className="rounded-full bg-white p-0.5">
//           <NoteAltIcon />
//         </div>
//       </div>
//       <div className="text-xs text-center">Total no of Complaints Unsolved</div>
//     </div>
//   );
// }

// export default ComplaintsUnsolved;
import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

function ComplaintsUnsolved({ unsolvedComplaints }) {
  return (
    <div className="flex flex-col w-[200px] p-4 space-y-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-3xl">{unsolvedComplaints}</div>
        <div className="rounded-full bg-white p-2 shadow-md">
          <NoteAltIcon fontSize="large" style={{ color: "#FF6347" }} />
        </div>
      </div>
      <div className="text-xs text-center">
        Total number of Complaints Unsolved
      </div>
    </div>
  );
}

export default ComplaintsUnsolved;
