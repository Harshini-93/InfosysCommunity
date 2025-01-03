import React, { useEffect, useState } from 'react'
import BlockCard from './BlockCard'

function BlockDetails() {
  const [totalFlatsA,setTotalFlatA]=useState(0);
  const [totalFlatsB,setTotalFlatB]=useState(0);
  const [totalResidentsFlatA,setTotalResidentsFlatA]=useState(0);
  const [totalResidentsFlatB,setTotalResidentsFlatB]=useState(0);
  const [totalOccupiedA,setTotalOccupiedA]=useState(0);
  const [totalOccupiedB,setTotalOccupiedB]=useState(0);
  const [totalUnoccupiedA,setTotalUnoccupiedA]=useState(0);
  const [totalUnoccupiedB,setTotalUnoccupiedB]=useState(0);

  
  useEffect(()=>{
    const fetchTotalFlatsA=async ()=>{
      try{
        const jwtToken=localStorage.getItem('jwt');
        const response=await fetch('http://localhost:8082/api/getAllFlats',
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        const data=await response.json();
        const Acount=data.filter(flat=>flat.flatNo[0]=="A");
        const Bcount=data.filter(flat=>flat.flatNo[0]=="B");
        const Aoccupied=Acount.filter(flat=>flat.occupied==true);
        const Boccupied=Bcount.filter(flat=>flat.occupied==true);
        setTotalFlatA(Acount.length);
        setTotalFlatB(Bcount.length);
        setTotalOccupiedA(Aoccupied.length);
        setTotalOccupiedB(Boccupied.length);
        const Aunoccupied=Acount.filter(flat=>flat.occupied==false);
        const Bunoccupied=Bcount.filter(flat=>flat.occupied==false);
        setTotalUnoccupiedA(Aunoccupied.length);
        setTotalUnoccupiedB(Bunoccupied.length);
      }
      catch(error){
        console.error('Error fetching data:',error);
      }
    }
    const fetchTotalResidents=async()=>{
      try{
        const jwtToken=localStorage.getItem('jwt');
        const response=await fetch('http://localhost:8082/api/residents',
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        const data=await response.json();
        const Acount=data.filter(resident=>resident.flatNo[0]=="A");
        const Bcount=data.filter(resident=>resident.flatNo[0]=="B");
        setTotalResidentsFlatA(Acount.length);
        setTotalResidentsFlatB(Bcount.length);
      }
      catch(error){
        console.error('Error fetching data:',error);
      }
    }
    fetchTotalResidents();
    fetchTotalFlatsA();
  },[])
  return (
    <div className="flex space-x-3 justify-between flex-wrap space-y-2">
      <BlockCard block={"A"} totalFlats={totalFlatsA} totalMembers={totalResidentsFlatA} occupied={totalOccupiedA} unoccupied={totalUnoccupiedA}/>
      <BlockCard block={"B"} totalFlats={totalFlatsB} totalMembers={totalResidentsFlatB} occupied={totalOccupiedB} unoccupied={totalUnoccupiedB}/>
    </div>
  )
}

export default BlockDetails