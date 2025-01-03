import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSelector } from 'react-redux';
function EventCalendar() {
  const [eventsData, setEventsData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const addEvent=useSelector(store=>store.event?.message);
  useEffect(() => {
    async function fetchAllEvents() {
      try {
        const jwtToken = localStorage.getItem('jwt');
        const response = await fetch('http://localhost:8084/api/getEventList',
          {
            headers: {
                "Authorization": `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }
        }
        );
        const data = await response.json();
        const formattedEvents = data.map(event => ({
          title: event.eventName,
          start: new Date(event.eventDate),
          end: new Date(event.eventDate),
        }));
        setEventsData(formattedEvents);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllEvents();
  }, [addEvent]);

  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, 'months').toDate();
    handleNavigate(nextMonth);
  };

  const goToPreviousMonth = () => {
    const previousMonth = moment(currentDate).subtract(1, 'months').toDate();
    handleNavigate(previousMonth); 
  };

  const goToThisMonth = () => {
    const thisMonth = moment().startOf('month').toDate(); 
    handleNavigate(thisMonth);
  };

  return (
    <div className="p-5 flex flex-col space-y-5">
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>{moment(currentDate).format('MMMM YYYY')}</div>
        <div className=''>
          <button onClick={goToThisMonth} className="px-4 py-2 bg-gray-200 rounded mx-2">Today</button>
          <button onClick={goToPreviousMonth} className="px-3 py-2 rounded-tl rounded-bl text-white bg-cyan-950"><ArrowBackIosIcon/></button>
          <button onClick={goToNextMonth} className="px-3 py-2 text-white bg-cyan-950  rounded-tr rounded-br"><ArrowForwardIosIcon/></button>
        </div>
      </div>
      
      <Calendar
        localizer={momentLocalizer(moment)}
        date={currentDate}
        onNavigate={handleNavigate}
        defaultView="month"
        style={{ height: '60vh' }}
        selectable
        events={eventsData}
        toolbar={false}
      />
    </div>
  );
}

export default EventCalendar;
