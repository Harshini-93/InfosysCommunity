import React, { useEffect, useState } from 'react'
import RequestForm from './RequestForm'
import TotalVendors from './TotalVendors'
import AddVendorModal from './AddVendorModal';
import { useSelector } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';

function RequestPage() {
    const [vendors,setVendors]=useState([]);
    const [openModal,setOpenModal]=useState(false);
    const vendorAdded=useSelector(store=>store.request.message);
    const [vendorId,setVendorId]=useState();
    const role=useSelector(store=>store.auth.user?.role);
    const loading = useSelector((state) => state.request?.loading);
    const handleModalOpen = () => {
        setOpenModal(true);
    }
    const handleModalClose = () => {
        setOpenModal(false);
    }
    const handleBlockClick=(block)=>(setVendorId(block))
    useEffect(()=>{
        const fetchVendors = async () => {
            try {
                const jwtToken = localStorage.getItem('jwt');
                const response = await fetch('http://localhost:8083/api/getAllVendors',
                    {
                        headers: {
                            "Authorization": `Bearer ${jwtToken}`,
                            "Content-Type": "application/json"
                          }
                    }
                );
                const data = await response.json();
                setVendors(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchVendors();
    },[vendorAdded])
  return (
    <div className='p-5 w-[100%]'>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
        <h1 className='font-bold text-xl'>Select Service Type</h1>
        <div className='flex flex-row space-x-5 my-5 flex-wrap'>
        {vendors.map((vendor)=>{
            return(
                <button className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                    vendorId=== vendor.vendorId
                      ? "bg-cyan-950 text-white"
                      : "bg-white text-cyan-950"
                  }`}onClick={() => handleBlockClick(vendor.vendorId)}>{vendor.service}</button>
            )
        })}
        </div>
        <RequestForm vendorId={vendorId}/>
        <TotalVendors totalVendors={vendors.length}/>
        <div className='flex flex-row justify-between items-center'>
            <div className='w-3/4'><h1 className='font-extrabold text-xl text-cyan-900'>Vendors List</h1></div>
            {role==="Admin"?
            <div className='w-1/4'><button className='bg-cyan-950 text-white px-2 py-1 rounded-lg' onClick={handleModalOpen}>Add Vendor</button>
            <AddVendorModal open={openModal} close={handleModalClose}/>
            </div>:null}
        </div>
        <div className='w-[100%] mt-5'>
        <table className="border-collapse  w-[90%]">
                    <thead>
                        <tr className=' border border-gray-300'>
                            <td className=" p-1.5 font-semibold text-sky-900 opacity-75">No</td>
                            <td className=" p-1.5  font-semibold  text-cyan-900 opacity-75">Name</td>
                            <td className=" p-1.5  font-semibold  text-cyan-900 opacity-75">Service</td>
                            <td className=" p-1.5  font-semibold  text-cyan-900 opacity-75">Company</td>
                            <td className=" p-1.5  font-semibold  text-cyan-900 opacity-75">Phone No</td>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.length > 0 ? (
                            vendors.map((vendor) => (
                                <tr key={vendor.vendorId}  className='border border-gray-300 p-1'>
                                    <td className=" p-1.5">{vendor.vendorId}</td>
                                    <td className=" p-1.5">{vendor.name}</td>
                                    <td className=" p-1.5">{vendor.service}</td>
                                    <td className=" p-1.5">{vendor.company}</td>
                                    <td className=" p-1.5">{vendor.phoneNo}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No vendors available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
    </div>
  )
}

export default RequestPage