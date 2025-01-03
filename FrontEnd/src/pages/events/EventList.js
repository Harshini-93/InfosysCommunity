import React, { useEffect, useState } from 'react'
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch, useSelector } from 'react-redux';
import UpdateEventModal from './UpdateEventModal';
import { deleteEvent } from '../../redux/events/event.action';
import EventFeedback from './EventFeedback';
import { useNavigate } from 'react-router-dom';
function EventList() {
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => (setOpenModal(true));
    const handleCloseModal = () => (setOpenModal(false));
    const role = useSelector(store => store.auth.user?.role)
    const event = useSelector(store => store.event?.message);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchAllEvents() {
            try {
                const jwtToken = localStorage.getItem('jwt');
                const response = await fetch("http://localhost:8084/api/getEventList",
                    {
                        headers: {
                            "Authorization": `Bearer ${jwtToken}`,
                            "Content-Type": "application/json"
                          }
                    }
                );
                const data = await response.json();
                setEvents(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchAllEvents();
    }, [event])
    const deleteEventHandler = (eventId) => {
        dispatch(deleteEvent(eventId));
    }
    return (
        <div className='p-5'>
            {events.map((event) => {
                return (
                    <div className='flex bg-white shadow-lg p-3 text-cyan-950 mb-5' key={event.eventId}>
                        <div className='flex flex-row space-x-5 w-1/2 cursor-pointer' onClick={() => navigate(`/event-feedback/${event.eventId}`)}>
                            <div><img src={event.eventImage} className='w-[5.5rem] h-[5.5rem]' /></div>
                            <div className='flex flex-col space-y-3 justify-center'>
                                <h1 className='font-bold text-md'>{event.eventName}</h1>
                                <p className='text-sm'>{event.eventDetails}</p>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col items-end justify-between'>
                            <div className='text-xs'>
                                <p>{new Date(event.eventDate).toLocaleString()}</p>
                            </div>
                            {role === "Admin" ?
                                <div className='flex space-x-2'>
                                    <button className='text-white bg-cyan-950 rounded-full h-[1.5rem] w-[1.5rem]' onClick={handleOpenModal}><ModeRoundedIcon fontSize="10px"/></button>
                                    <UpdateEventModal open={openModal} close={handleCloseModal} event={event} />
                                    <button className='text-white bg-cyan-950 rounded-full h-[1.5rem] w-[1.5rem]' onClick={() => deleteEventHandler(event.eventId)}><DeleteRoundedIcon fontSize="10px" /></button>
                                </div> : null}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default EventList