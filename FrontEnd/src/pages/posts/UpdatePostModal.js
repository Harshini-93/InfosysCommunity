import { Backdrop, Box, CircularProgress, Modal } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { UploadToCloudinary } from '../utilities/UploadToCloudinary';
import { useDispatch } from 'react-redux';
import { updateNotice } from '../../redux/notice/notice.action';
import { updatePost } from '../../redux/post/post.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
  borderRadius: 3,
  outline: 'none',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

function UpdatePostModal({ open, close, post }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postImage, setPostImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch=useDispatch();

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setContent(post.content || '');
      setPostImage(post.postImage || '');
    }
  }, [post]);

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    try {
      const imgUrl = await UploadToCloudinary(event.target.files[0], 'image');
      setPostImage(imgUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      postImage,
    };
    dispatch(updatePost(post.postId,formData));
    close();
    setTitle('');
    setContent('');
    setPostImage('');
  };

  return (
    <div>
      <Modal open={open} onClose={close}>
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Box sx={style}>
            <div className="absolute top-5 right-8 cursor-pointer" onClick={close}>
              <CloseIcon />
            </div>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between space-x-5">
                  <div className="w-[5.5rem] h-[5.5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer w-1/4 relative">
                    <label>
                      <input
                        type="file"
                        name="postImage"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleSelectImage}
                      />
                      <AddCircleIcon sx={{ fontSize: 'medium', cursor: 'pointer' }} />
                      <span className="cursor-pointer">Add Post</span>
                    </label>
                    {postImage && <img className="h-[5.5rem] w-[5.5rem] absolute top-0 left-0" src={postImage} alt="Selected" />}
                  </div>

                <div className="flex flex-col justify-center w-3/4 my-2">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none"
                    placeholder="Enter the Title..."
                    required
                  />
                </div>
              </div>
              <textarea
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border border-gray-300 shadow-lg p-1 rounded-lg h-[8rem] focus:outline-none"
                placeholder="Enter the description here..."
                required
              />
              <div>
                <button
                  type="submit"
                  className="px-7 py-2 rounded-xl text-sm bg-cyan-950 text-white float-right"
                >
                  Update Post
                </button>
              </div>
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default UpdatePostModal;
