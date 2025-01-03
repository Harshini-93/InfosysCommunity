// import React from 'react'
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import { Card } from '@mui/material';
// function ParkingPlots() {
//   return (
//     <Card className="flex flex-col w-[15%] p-2 space-y-2 rounded-md" sx={{color:"gray"}}>
//     <div className="flex flex-row justify-between items-center">
//         <div className='font-bold text-4xl'>1</div>
//         <div className='rounded-full bg-cyan-950 p-0.5 text-white'><DirectionsCarIcon/></div>
//     </div>
//     <div className='text-xs text-center'>Total Parking Plots</div>
// </Card>
//   )
// }

// export default ParkingPlots
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Card } from "@mui/material";

function ParkingPlots() {
  return (
    <Card
      className="flex flex-col w-[15%] p-4 space-y-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
      sx={{ color: "gray" }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-5xl text-gray-300">1</div>{" "}
        {/* Light gray text */}
        <div className="rounded-full bg-gray-700 p-2 shadow-md">
          <DirectionsCarIcon fontSize="large" style={{ color: "#d1d5db" }} />{" "}
          {/* Light gray icon */}
        </div>
      </div>
      <div className="text-sm text-center text-gray-300">
        Total Parking Plots
      </div>{" "}
      {/* Light gray text */}
    </Card>
  );
}

export default ParkingPlots;
