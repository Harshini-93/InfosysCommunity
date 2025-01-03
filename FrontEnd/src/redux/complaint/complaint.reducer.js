import { toast, Zoom } from "react-toastify";
import { 
    CLOSE_COMPLAINT_FAILURE, 
    CLOSE_COMPLAINT_REQUEST, 
    CLOSE_COMPLAINT_SUCCESS, 
    REGISTER_COMPLAINT_FAILURE, 
    REGISTER_COMPLAINT_REQUEST, 
    REGISTER_COMPLAINT_SUCCESS 
} from "./complaint.actionType";

const initialState = {
    message: null,
    error: null,
    loading: false,
};

const complaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_COMPLAINT_REQUEST:
        case CLOSE_COMPLAINT_REQUEST:
            return {
                ...state,
                loading: true,
                message: null,
                error: null,
            };
        case REGISTER_COMPLAINT_SUCCESS:
        case CLOSE_COMPLAINT_SUCCESS:
            toast.success(action.payload, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
            return {
                loading: false,
                message: action.payload,
                error: null,
            };
        case REGISTER_COMPLAINT_FAILURE:
        case CLOSE_COMPLAINT_FAILURE:
            toast.error(action.payload.error, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                transition: Zoom,
            });
            return {
                loading: false,
                message: null,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default complaintReducer;
