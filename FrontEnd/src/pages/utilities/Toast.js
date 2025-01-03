import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Zoom , toast } from 'react-toastify';

function Toast() {
    const message = useSelector(state => state.auth.message);
    const errorMessage= useSelector(state => state.auth.error);
    const complaintSuccess=useSelector(state=>state.complaint.message);
    const complaintError = useSelector(state=>state.complaint.error);
    const requestSuccess=useSelector(state=>state.request.message);
    const requestError=useSelector(state=>state.request.error);
    const eventSuccess=useSelector(state=>state.event?.message)
    const eventFailure=useSelector(state=>state.event?.error)
    const noticeSuccess=useSelector(state=>state.notice?.message)
    const noticeFailure=useSelector(state=>state.notice?.error)
    const postSuccess=useSelector(state=>state.post?.message)
    const postFailure=useSelector(state=>state.post?.error)
    useEffect(() => {
        if (message) {
            toast.success(message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (complaintSuccess) {
            toast.success(complaintSuccess, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (requestSuccess) {
            toast.success(requestSuccess, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (eventSuccess) {
            toast.success(eventSuccess, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (noticeSuccess) {
            toast.success(noticeSuccess, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (postSuccess) {
            toast.success(postSuccess, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
    }, [message,complaintSuccess,requestSuccess,eventSuccess,noticeSuccess,postSuccess]);
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (requestError) {
            toast.error(requestError, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (complaintError) {
            toast.error(complaintError, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (eventFailure) {
            toast.error(eventFailure, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (noticeFailure) {
            toast.error(noticeFailure, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
        if (postFailure) {
            toast.error(postFailure, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
        }
    }, [errorMessage,requestError,complaintError,eventFailure,postFailure]);
  return (
    <div></div>
  )
}

export default Toast