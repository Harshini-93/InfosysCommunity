import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makePayment } from '../../redux/billing/billing.action';
import { Backdrop, CircularProgress } from '@mui/material';

function Billing() {
    const isLoading = useSelector(store => store.billing.loading);
    const reload = useSelector(store => store.billing.message);
    const flatNo = useSelector(store => store.auth.userDetails?.flatNo);
    const [payments, setPayments] = useState([]);
    const [flatBills, setFlatBills] = useState([]); 
    const dispatch = useDispatch();

    const handlePayment = () => {
        dispatch(makePayment());
    };

    useEffect(() => {
        async function getAllPayments() {
            try {
                const jwtToken = localStorage.getItem('jwt');
                const response = await fetch("http://localhost:8085/api/getAllPayments", {
                    headers: {
                        "Authorization": `Bearer ${jwtToken}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setPayments(data);
            } catch (error) {
                console.error(error);
            }
        }
        getAllPayments();
    }, [reload]);

    useEffect(() => {
        const filteredBills = payments.filter(payment => payment.flatNo === flatNo && payment.status !== "PAID");
        setFlatBills(filteredBills);
    }, [payments, flatNo]);

    return (
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            
            {flatBills.length > 0 ? (
                flatBills.map((bill) => (
                    <div key={bill.flatNo} className='flex flex-col justify-center items-center'>
                        <h1 className="text-lg font-semibold">Monthly Maintenance Bill: ₹{bill.amount}/-</h1>
                        <button
                            className="bg-red-500 text-white py-1 px-3 rounded-xl mt-2 cursor-pointer"
                            onClick={() => handlePayment(bill)}
                        >
                            Pay Now
                        </button>
                    </div>
                ))
            ) : (
                <div className='flex justify-center items-center'>
                    <h2 className='text-2xl font-bold'>No Bills Pending</h2>
                </div>
            )}
        </div>
    );
}

export default Billing;
