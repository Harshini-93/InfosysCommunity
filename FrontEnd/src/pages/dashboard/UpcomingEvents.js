// import React from 'react'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { Card } from '@mui/material';
// function UpcomingEvents() {
//   return (
//     <Card className="flex flex-col w-[15%] p-2 space-y-2 rounded-md" sx={{color:"gray"}}>
//     <div className="flex flex-row justify-between items-center">
//         <div className='font-bold text-4xl'>1</div>
//         <div className='rounded-full bg-cyan-950 p-0.5 text-white'><CalendarMonthIcon/></div>
//     </div>
//     <div className='text-xs text-center'>Total Upcoming Events</div>
// </Card>
//   )
// }

// export default UpcomingEvents
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Card } from "@mui/material";

function UpcomingEvents() {
  return (
    <Card
      className="flex flex-col w-[15%] p-4 space-y-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
      sx={{ color: "gray" }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-5xl text-gray-600">1</div>{" "}
        {/* Adjusted text color */}
        <div className="rounded-full bg-gray-700 p-2 shadow-md">
          <CalendarMonthIcon fontSize="large" style={{ color: "#d1d5db" }} />
        </div>
      </div>
      <div className="text-sm text-center text-gray-600">
        Total Upcoming Events
      </div>
    </Card>
  );
}

export default UpcomingEvents;
