// import React, { useEffect, useState } from 'react';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { Backdrop, CircularProgress } from '@mui/material';
// import { useSelector } from 'react-redux';
// import AddPostModal from './AddPostModal';
// import PostCard from './PostCard';

// function PostPage() {
//   const role = useSelector(store => store.auth.user?.role);
//   const [openModal, setOpenModal] = useState(false);

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);  // Close the modal correctly
//   };

//   const isLoading = useSelector(store => store.post?.loading);
//   const post = useSelector(store => store.post?.message);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchAllPosts() {
//       try {
//         const jwtToken = localStorage.getItem('jwt');
//         const response = await fetch("http://localhost:8084/api/getPostList", {
//           headers: {
//             "Authorization": `Bearer ${jwtToken}`,
//             "Content-Type": "application/json"
//           }
//         });
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchAllPosts();
//   }, [post]);

//   return (
//     <div className='p-5'>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isLoading}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//       {role === "Admin" && (
//         <div className='flex flex-col'>
//           <div className='w-[5rem] h-[5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer' onClick={handleOpenModal}>
//             <AddCircleIcon sx={{ fontSize: 'medium', cursor: 'pointer' }} />
//             <span className="cursor-pointer">Add Post</span>
//           </div>
//           <AddPostModal open={openModal} close={handleCloseModal} />
//         </div>
//       )}
//       <div className='py-5'>
//         {posts.map(post => <PostCard key={post.id} post={post} />)}
//       </div>
//     </div>
//   );
// }

// export default PostPage;
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import AddPostModal from "./AddPostModal";
import PostCard from "./PostCard";

function PostPage() {
  const role = useSelector((store) => store.auth.user?.role);
  const isLoading = useSelector((store) => store.post?.loading);
  const post = useSelector((store) => store.post?.message);

  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await fetch("http://localhost:8084/api/getPostList", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - Unable to fetch posts`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchAllPosts();
  }, [post]);

  return (
    <div className="p-5">
      {/* Loading Backdrop */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Admin Add Post Button */}
      {role === "Admin" && (
        <div className="flex flex-col mb-5">
          <div
            className="w-[8rem] h-[3rem] bg-cyan-950 text-white text-sm flex justify-center items-center rounded-lg cursor-pointer"
            onClick={handleOpenModal}
          >
            <AddCircleIcon sx={{ fontSize: "medium", cursor: "pointer" }} />
            <span className="ml-2 cursor-pointer">Add Post</span>
          </div>
          <AddPostModal open={openModal} close={handleCloseModal} />
        </div>
      )}

      {/* Post List */}
      <div>
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-gray-600 text-center">No posts available.</div>
        )}
      </div>
    </div>
  );
}

export default PostPage;
