// import { Backdrop, Box, CircularProgress, Modal } from '@mui/material';
// import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { UploadToCloudinary } from '../utilities/UploadToCloudinary';
// import { useDispatch } from 'react-redux';
// import { addEvent } from '../../redux/events/event.action';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '40%',
//   height: '80%',
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 5,
//   borderRadius: 3,
//   outline: 'none',
//   overflow: 'auto',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// };

// function AddEventModal({ open, close }) {
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [eventDetails, setEventDetails] = useState('');
//   const [eventImage, setEventImage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch=useDispatch();
//   const handleSelectImage = async (event) => {
//     setIsLoading(true);
//     try {
//       const imgUrl = await UploadToCloudinary(event.target.files[0], 'image');
//       setEventImage(imgUrl);
//     } catch (error) {
//       console.error('Image upload failed:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       eventName,
//       eventDate,
//       eventDetails,
//       eventImage,
//     };
//     dispatch(addEvent(formData));
//     console.log('Form Data:', formData);
//     close();
//     setEventName('');
//     setEventDate('');
//     setEventDetails('');
//     setEventImage('');
//   };

//   return (
//     <div>
//       <Modal open={open} onClose={close}>
//         <div>
//           <Backdrop
//             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//             open={isLoading}
//           >
//             <CircularProgress color="inherit" />
//           </Backdrop>
//           <Box sx={style}>
//             <div className="absolute top-5 right-8 cursor-pointer" onClick={close}>
//               <CloseIcon />
//             </div>
//             <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
//               <div className="flex flex-row justify-between space-x-5">
//                   <div className="w-[5.5rem] h-[5.5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer w-1/4 relative">
//                     <label>
//                       <input
//                         type="file"
//                         name="eventImage"
//                         accept="image/*"
//                         style={{ display: 'none' }}
//                         onChange={handleSelectImage}
//                       />
//                       <AddCircleIcon sx={{ fontSize: 'medium', cursor: 'pointer' }} />
//                       <span className="cursor-pointer">Add Image</span>
//                     </label>
//                     {eventImage && <img className="h-[5.5rem] w-[5.5rem] absolute top-0 left-0" src={eventImage} alt="Selected" />}
//                   </div>

//                 <div className="flex flex-col justify-between w-3/4 my-2">
//                   <input
//                     type="text"
//                     name="eventName"
//                     value={eventName}
//                     onChange={(e) => setEventName(e.target.value)}
//                     className="border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none"
//                     placeholder="Enter the event name here..."
//                     required
//                   />
//                   <input
//                     type="datetime-local"
//                     name="eventDate"
//                     value={eventDate}
//                     onChange={(e) => setEventDate(e.target.value)}
//                     className="border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//               <textarea
//                 type="text"
//                 name="eventDetails"
//                 value={eventDetails}
//                 onChange={(e) => setEventDetails(e.target.value)}
//                 className="border border-gray-300 shadow-lg p-1 rounded-lg h-[8rem] focus:outline-none"
//                 placeholder="Enter the description here..."
//                 required
//               />
//               <div>
//                 <button
//                   type="submit"
//                   className="px-7 py-2 rounded-xl text-sm bg-cyan-950 text-white float-right"
//                 >
//                   Add Event
//                 </button>
//               </div>
//             </form>
//           </Box>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default AddEventModal;
import { Backdrop, Box, CircularProgress, Modal } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { UploadToCloudinary } from "../utilities/UploadToCloudinary";
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/events/event.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: 3,
  outline: "none",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

function AddEventModal({ open, close }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    try {
      const imgUrl = await UploadToCloudinary(event.target.files[0], "image");
      setEventImage(imgUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      eventName,
      eventDate,
      eventDetails,
      eventImage,
    };
    dispatch(addEvent(formData));
    console.log("Form Data:", formData);
    close();
    setEventName("");
    setEventDate("");
    setEventDetails("");
    setEventImage("");
  };

  return (
    <div>
      <Modal open={open} onClose={close}>
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Box sx={style}>
            <div
              className="absolute top-5 right-8 cursor-pointer"
              onClick={close}
            >
              <CloseIcon />
            </div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between space-x-5">
                <div className="w-[5.5rem] h-[5.5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer relative">
                  <label>
                    <input
                      type="file"
                      name="eventImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleSelectImage}
                    />
                    <AddCircleIcon
                      sx={{ fontSize: "medium", cursor: "pointer" }}
                    />
                    <span className="cursor-pointer">Add Image</span>
                  </label>
                  {eventImage && (
                    <img
                      className="h-[5.5rem] w-[5.5rem] absolute top-0 left-0 rounded-lg"
                      src={eventImage}
                      alt="Selected"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-between w-3/4 my-2">
                  <input
                    type="text"
                    name="eventName"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="border border-gray-300 shadow-lg p-2 rounded-md focus:outline-none"
                    placeholder="Enter the event name here..."
                    required
                  />
                  <input
                    type="datetime-local"
                    name="eventDate"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="border border-gray-300 shadow-lg p-2 rounded-md focus:outline-none"
                    required
                  />
                </div>
              </div>
              <textarea
                type="text"
                name="eventDetails"
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
                className="border border-gray-300 shadow-lg p-2 rounded-lg h-[8rem] focus:outline-none"
                placeholder="Enter the description here..."
                required
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl text-lg bg-cyan-950 text-white hover:bg-cyan-700 transition duration-300"
                >
                  Add Event
                </button>
              </div>
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default AddEventModal;
