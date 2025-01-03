import GridViewIcon from "@mui/icons-material/GridView";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import LabelIcon from "@mui/icons-material/Label";
import StickyNote2TwoToneIcon from "@mui/icons-material/StickyNote2TwoTone";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EventNoteIcon from "@mui/icons-material/EventNote";
const SidebarMenu = [
  {
    icon: <GridViewIcon />,
    item: "Dashboard",
    path: "dashboard",
  },
  {
    icon: <LabelIcon />,
    item: "Request Services",
    path: "requestServices",
  },
  {
    icon: <EditNoteIcon />,
    item: "Complaints",
    path: "complaints",
  },
  {
    icon: <EventNoteIcon />,
    item: "Events",
    path: "events",
  },
  {
    icon: <StickyNote2TwoToneIcon />,
    item: "Notices",
    path: "notices",
  },
  {
    icon: <PostAddIcon />,
    item: "Posts",
    path: "posts",
  },
  {
    icon: <LocalParkingOutlinedIcon />,
    item: "Parking",
    path: "parking",
  },
  {
    icon: <ContactEmergencyIcon />,
    item: "Emergency Contacts",
    path: "emergencyContacts",
  },
  {
    icon: <CurrencyRupeeIcon />,
    item: "Billings",
    path: "billings",
  },
];
export default SidebarMenu;
