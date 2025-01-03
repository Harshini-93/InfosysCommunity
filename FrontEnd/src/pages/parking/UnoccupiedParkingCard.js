import React, { useEffect, useState } from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
function UnoccupiedParkingCard() {
    const [unoccupiedCount,setUnoccupiedCount]=useState(0);
            useEffect(()=>{
                const fetchUnoccupiedCount=async ()=>{
                    try {
                        const jwtToken = localStorage.getItem('jwt');
                        const response = await fetch('http://localhost:8082/api/getAllFlats',
                            {
                                headers: {
                                    "Authorization": `Bearer ${jwtToken}`,
                                    "Content-Type": "application/json"
                                  }
                            }
                        );
                        if (!response.ok) throw new Error("Failed to fetch flats");
                        const data = await response.json();
                        const unoccupiedFlats = data.filter(flat => flat.occupied === false);
                        setUnoccupiedCount(unoccupiedFlats.length);
                    } catch (error) {
                        console.error("Error fetching flat count:", error);
                    }
                }
                fetchUnoccupiedCount();
            },[])
  return (
    <div className="flex flex-col  p-2 space-y-3 bg-blue-300 rounded-md text-blue-600  h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{unoccupiedCount}</div>
                <div className='rounded-full bg-white p-0.5'><DirectionsCarIcon/></div>
            </div>
            <div className='text-xs text-center'>No of Parking lots Unoccupied</div>
        </div>
  )
}

export default UnoccupiedParkingCard