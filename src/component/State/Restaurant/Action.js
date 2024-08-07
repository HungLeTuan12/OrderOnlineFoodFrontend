import { api } from "../../config/api";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"
// Get all restaurant action
export const getAllRestaurantAction = (token) => async(dispatch) => {
    dispatch({type: GET_ALL_RESTAURANT_REQUEST});
    try {
        const {data} = await api.get("/api/restaurants", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({type: GET_ALL_RESTAURANT_SUCCESS, payload: data})
        console.log("-- All restaurants: ", data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: GET_ALL_RESTAURANT_FAILURE, payload: error})
    }
}
// Get restaurant by id
export const getRestaurantById = (reqData) => async(dispatch) => {
    dispatch({type: GET_RESTAURANT_BY_ID_REQUEST});
    try {
        const {response} = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`,
            },
        })
        dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data})
        console.log("-- Restaurant by id: ", response.data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: error})
    }
}
// Get restaurant by user id
export const getRestaurantByUserId = (jwt) => async(dispatch) => {
    dispatch({type: GET_RESTAURANT_BY_USER_ID_REQUEST});
    try {
        const {data} = await api.get(`/api/admin/restaurants/user`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data})
        console.log("-- Restaurant by user id: ", data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error.message})
    }
}
// Create restaurant
export const createRestaurant = (reqData) => async(dispatch) => {
    dispatch({type: CREATE_RESTAURANT_REQUEST});
    try {
        const {data} = await api.post(`/api/admin/restaurants/`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`,
            },
        })
        dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: data})
        console.log("-- Create restaurant success: ", data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: CREATE_RESTAURANT_FAILURE, payload: error.message})
    }
}
// Update restaurant
export const updateRestaurant = ({restaurantId, restaurantData, jwt}) => async(dispatch) => {
    dispatch({type: UPDATE_RESTAURANT_REQUEST});
    try {
        const {data} = await api.put(
            `/api/admin/restaurants/${restaurantId}`,
             restaurantData,
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload: data})
        console.log("-- Update restaurant success: ", data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: UPDATE_RESTAURANT_FAILURE, payload: error.message})
    }
}
// Delete restaurant
export const deleteRestaurant = ({restaurantId, jwt}) => async(dispatch) => {
    dispatch({type: DELETE_RESTAURANT_REQUEST});
    try {
        const {data} = await api.delete(
            `/api/admin/restaurants/${restaurantId}`,
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: data})
        console.log("-- Delete restaurant success: ", data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: DELETE_RESTAURANT_FAILURE, payload: error.message})
    }
}
// Update restaurant status
export const updateRestaurantStatus = ({restaurantId, jwt}) => async(dispatch) => {
    dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST});
    try {
        const {data} = await api.put(
            `/api/admin/restaurants/${restaurantId}/status`,
            {},
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data})
        console.log("-- Update restaurant success: ", data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error.message})
    }
}

// Create category action
export const createCategory = ({data, jwt}) => async(dispatch) => {
    dispatch({type: CREATE_CATEGORY_REQUEST});
    try {
        const res = await api.post(
            `/api/admin/category`, data,
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        dispatch({type: CREATE_CATEGORY_SUCCESS, payload: res.data})
        console.log("-- Delete restaurant success: ", res.data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: CREATE_CATEGORY_FAILURE, payload: error.message})
    }
}
// Create category action
export const getRestaurantsCategory = ({jwt}) => async(dispatch) => {
    dispatch({type: GET_RESTAURANTS_CATEGORY_REQUEST});
    try {
        const res = await api.get(
            `/api/admin/category/category/restaurant`, 
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        dispatch({type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data})
        console.log("-- GET_RESTAURANTS_CATEGORY_SUCCESS: ", res.data);
    }
    catch(error) {
        console.log("xxx Error: Catch error");
        dispatch({type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error.message})
    }
}