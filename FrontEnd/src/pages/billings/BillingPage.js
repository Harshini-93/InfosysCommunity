import React from 'react'
import Billing from './Billing'
import { useSelector } from 'react-redux'
import BillsList from './BillsList'

function BillingPage() {
    const role=useSelector(store=>store.auth.user?.role)
  return (
    <div className='h-[85%] flex flex-col justify-center items-center'>
        {role==="Resident"?<Billing/>:null}
        {role==="Admin"?<BillsList/>:null}
    </div>
  )
}

export default BillingPage