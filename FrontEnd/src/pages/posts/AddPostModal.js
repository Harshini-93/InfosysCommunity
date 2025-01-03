// import React, { useState } from 'react';
// import { Modal, Box, Backdrop, CircularProgress } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { UploadToCloudinary } from '../utilities/UploadToCloudinary';
// import { useDispatch } from 'react-redux';
// import { addPost } from '../../redux/post/post.action';

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

// function AddPostModal({ open, close }) {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [postImage, setPostImage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   const handleSelectImage = async (event) => {
//     setIsLoading(true);
//     try {
//       const imgUrl = await UploadToCloudinary(event.target.files[0], 'image');
//       setPostImage(imgUrl);
//     } catch (error) {
//       console.error('Image upload failed:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       title,
//       content,
//       postImage,
//     };
//     dispatch(addPost(formData));
//     close();  // Close modal after post submission
//     setTitle('');
//     setContent('');
//     setPostImage('');
//   };

//   return (
//     <Modal open={open} onClose={close}>
//       <Box sx={style}>
//         <div className="absolute top-5 right-8 cursor-pointer" onClick={close}>
//           <CloseIcon />
//         </div>
//         <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
//           <div className="flex flex-row justify-between space-x-5">
//             <div className="w-[5.5rem] h-[5.5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer w-1/4 relative">
//               <label>
//                 <input
//                   type="file"
//                   name="postImage"
//                   accept="image/*"
//                   style={{ display: 'none' }}
//                   onChange={handleSelectImage}
//                 />
//                 <AddCircleIcon sx={{ fontSize: 'medium', cursor: 'pointer' }} />
//                 <span className="cursor-pointer">Add Post</span>
//               </label>
//               {postImage && <img className="h-[5.5rem] w-[5.5rem] absolute top-0 left-0" src={postImage} alt="Selected" />}
//             </div>
//             <div className="flex flex-col justify-center w-3/4 my-2">
//               <input
//                 type="text"
//                 name="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none"
//                 placeholder="Enter the Title..."
//                 required
//               />
//             </div>
//           </div>
//           <textarea
//             name="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="border border-gray-300 shadow-lg p-1 rounded-lg h-[8rem] focus:outline-none"
//             placeholder="Enter the description here..."
//             required
//           />
//           <div>
//             <button type="submit" className="px-7 py-2 rounded-xl text-sm bg-cyan-950 text-white float-right">
//               Add Post
//             </button>
//           </div>
//         </form>
//       </Box>
//     </Modal>
//   );
// }

// export default AddPostModal;
import React, { useState } from "react";
import { Modal, Box, Backdrop, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UploadToCloudinary } from "../utilities/UploadToCloudinary";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/post/post.action";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  outline: "none",
};

function AddPostModal({ open, close }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const isLoading = useSelector((store) => store.post.loading);
  const dispatch = useDispatch();

  const handleImageUpload = async (event) => {
    setIsUploading(true);
    try {
      const imgUrl = await UploadToCloudinary(event.target.files[0], "image");
      setPostImage(imgUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, content, postImage };
    dispatch(addPost(formData));
    close();
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setPostImage("");
  };

  return (
    <Modal open={open} onClose={close}>
      <Box sx={modalStyle}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isUploading || isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Post</h2>
          <CloseIcon
            className="cursor-pointer"
            onClick={close}
            sx={{ fontSize: 24 }}
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload */}
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <div className="w-[80px] h-[80px] bg-gray-200 rounded-md flex justify-center items-center text-sm text-gray-500 border">
                {postImage ? (
                  <img
                    src={postImage}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  "Upload Image"
                )}
              </div>
            </label>
            <span className="text-sm text-gray-500">Max size: 5MB</span>
          </div>

          {/* Title Input */}
          <div>
            <input
              type="text"
              placeholder="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-cyan-950"
              required
            />
          </div>

          {/* Content Textarea */}
          <div>
            <textarea
              placeholder="Post Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-cyan-950"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-950 text-white rounded-md hover:bg-cyan-900"
            >
              Submit
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default AddPostModal;
