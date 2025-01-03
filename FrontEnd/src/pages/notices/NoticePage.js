// import React, { useEffect, useState } from "react";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import AddNoticeModal from "./AddNoticeModal";
// import { Backdrop, CircularProgress } from "@mui/material";
// import { useSelector } from "react-redux";
// import NoticeCard from "./NoticeCard";

// function NoticePage() {
//   const [openModal, setOpenModal] = useState(false);

//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };
//   const role = useSelector((store) => store.auth.user?.role);
//   const isLoading = useSelector((store) => store.notice?.loading);
//   const notice = useSelector((store) => store.notice?.message);
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     async function fetchAllNotices() {
//       try {
//         const jwtToken = localStorage.getItem("jwt");
//         const response = await fetch(
//           "http://localhost:8084/api/getNoticeList",
//           {
//             headers: {
//               Authorization: `Bearer ${jwtToken}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = await response.json();
//         setNotices(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchAllNotices();
//   }, [notice]);

//   return (
//     <div className="p-5">
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={isLoading}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//       {role === "Admin" ? (
//         <div className="flex flex-col">
//           <div
//             className="w-[5rem] h-[5rem] bg-cyan-950 text-white text-xs flex justify-center items-center rounded-lg cursor-pointer"
//             onClick={handleOpenModal}
//           >
//             <AddNoticeModal open={openModal} close={handleCloseModal} />
//             <AddCircleIcon sx={{ fontSize: "medium", cursor: "pointer" }} />
//             <span className="cursor-pointer">Add Notice</span>
//           </div>
//         </div>
//       ) : null}
//       <div className="py-5">
//         {notices.map((notice) => (
//           <NoticeCard key={notice.id} notice={notice} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NoticePage;
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddNoticeModal from "./AddNoticeModal";
import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import NoticeCard from "./NoticeCard";

function NoticePage() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const role = useSelector((store) => store.auth.user?.role);
  const isLoading = useSelector((store) => store.notice?.loading);
  const notice = useSelector((store) => store.notice?.message);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function fetchAllNotices() {
      try {
        const jwtToken = localStorage.getItem("jwt");
        const response = await fetch(
          "http://localhost:8084/api/getNoticeList",
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllNotices();
  }, [notice]);

  return (
    <div className="p-6">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Add Notice button for Admin Role */}
      {role === "Admin" && (
        <div className="flex justify-end mb-5">
          <button
            className="flex items-center bg-cyan-950 text-white text-lg rounded-lg py-2 px-6 shadow-lg hover:bg-cyan-700 transition duration-300"
            onClick={handleOpenModal}
          >
            <AddCircleIcon sx={{ fontSize: "1.5rem", marginRight: "8px" }} />
            Add Notice
          </button>
          <AddNoticeModal open={openModal} close={handleCloseModal} />
        </div>
      )}

      {/* Notices Grid */}
      <Grid container spacing={3}>
        {notices.length > 0 ? (
          notices.map((notice) => (
            <Grid item xs={12} sm={6} md={4} key={notice.id}>
              <NoticeCard notice={notice} />
            </Grid>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">
            No notices available
          </p>
        )}
      </Grid>
    </div>
  );
}

export default NoticePage;
