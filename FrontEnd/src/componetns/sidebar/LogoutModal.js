// import { Box, Modal, Typography } from '@mui/material';
// import React from 'react';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../../redux/authentication/auth.action';

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "50%",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 2,
//   borderRadius: 3,
//   outline: "none",
//   overflow: "scroll-y",
// };

// function LogoutModal({ open,handleClose}) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     handleClose();
//     navigate("/auth");
//   };
//   return (
//     <div>
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//           <div className='flex flex-col justify-center items-center space-y-5 text-cyan-950'>
//             <div><LogoutIcon sx={{ fontSize: "2rem" }} /></div>
//             <div className='font-bold text-xl'>Are You Sure You Want To Logout</div>
//             <div className='flex flex-row space-x-14'>
//               <button
//                 className='px-6 py-2 rounded-xl text-sm border border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white'
//                 onClick={handleLogout}>
//                 Yes
//               </button>
//               <button
//                 className='px-6 py-2 rounded-xl text-sm border border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white'
//                 onClick={handleClose}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default LogoutModal;
import {
  Box,
  Modal,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authentication/auth.action";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
  outline: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

function LogoutModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    navigate("/auth/signup");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Card
          sx={{
            width: "100%",
            padding: 2,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <LogoutIcon sx={{ fontSize: "4rem", color: "text.primary" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
              Are you sure you want to logout?
            </Typography>
            <div className="flex justify-center space-x-4 mt-4">
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{
                  paddingX: 4,
                  paddingY: 2,
                  borderRadius: "8px",
                  boxShadow: 3,
                  "&:hover": { backgroundColor: "cyan", color: "white" },
                }}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
                sx={{
                  paddingX: 4,
                  paddingY: 2,
                  borderRadius: "8px",
                  boxShadow: 3,
                  "&:hover": { backgroundColor: "gray", color: "white" },
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default LogoutModal;
