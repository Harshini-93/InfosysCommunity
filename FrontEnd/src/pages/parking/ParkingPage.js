import React, { useEffect, useState } from 'react'
import TotalParkingCard from './TotalParkingCard';
import OccupiedParkingCard from './OccupiedParkingCard';
import UnoccupiedParkingCard from './UnoccupiedParkingCard';

function ParkingPage() {
    const [parking,setParking]=useState([]);
    useEffect(() => {
            async function fetchAllParking() {
                try {
                    const jwtToken = localStorage.getItem('jwt');
                    const response = await fetch("http://localhost:8084/api/getAllParking",
                        {
                            headers: {
                                "Authorization": `Bearer ${jwtToken}`,
                                "Content-Type": "application/json"
                              }
                        }
                    );
                    const data = await response.json();
                    setParking(data);
                }
                catch (error) {
                    console.log(error);
                }
            }
            fetchAllParking();
        }, [])
  return (
    <div className='p-5'>
        <div className='flex space-x-3'>
            <div className='w-1/5'><TotalParkingCard totalParking={parking.length}/></div>
            <div className='w-1/5'><OccupiedParkingCard/></div>
            <div className='w-1/5'><UnoccupiedParkingCard/></div>
        </div>

    </div>
  )
}

export default ParkingPage