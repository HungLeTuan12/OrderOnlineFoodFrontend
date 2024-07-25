import { type } from "@testing-library/user-event/dist/type";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import axios from "axios";
import { api, API_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";

// Register
export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type: REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
        if(data.jwt)localStorage.setItem("jwt", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({type: REGISTER_SUCCESS, payload: data.jwt})
        console.log("Register success: ", data);

    }
    catch(error) {
        console.log("error", error);
        dispatch({type: REGISTER_FAILURE, payload: error})

    }
}
// Login
export const loginUser = (reqData) => async(dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
        if(data.jwt)localStorage.setItem("jwt", data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({type: LOGIN_SUCCESS, payload: data.jwt})
        console.log("Register success: ", data);

    }
    catch(error) {
        console.log("error", error);
        dispatch({type: LOGIN_FAILURE, payload: error})

    }
}
// Get user
export const getUser = (jwt) => async(dispatch) => {
    dispatch({type: GET_USER_REQUEST})
    try {
        const {data} = await api.get(`/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type: GET_USER_SUCCESS, payload: data})
        console.log("User profile: ", data);
    }
    catch(error) {
        console.log("error", error);
        dispatch({type: GET_USER_FAILURE, payload: error})

    }
}
// Add to favourite 
export const addToFavourite = ({jwt, restaurantId}) => async(dispatch) => {
    dispatch({type: ADD_TO_FAVORITE_REQUEST})
    try {
        const {data} = await api.put(`/api/restaurants/${restaurantId}/add-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type: ADD_TO_FAVORITE_SUCCESS, payload: data})
        console.log("Add to favorite: ", data);
    }
    catch(error) {
        console.log("error", error);
        dispatch({type: ADD_TO_FAVORITE_FAILURE, payload: error})

    }
}
// Logout
export const logout = () => async(dispatch) => {
    try {
        localStorage.clear();
        dispatch({type: LOGOUT})
        console.log("Logout success");
    }
    catch(error) {
        console.log("error", error);
    }
}
