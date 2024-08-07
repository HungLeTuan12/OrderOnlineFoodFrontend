import { api } from "../../config/api";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_ALL_INGREDIENTS_ITEM_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"
// Create menu item
export const createMenuItem = ({menu, jwt}) => async(dispatch) => {
    dispatch(CREATE_MENU_ITEM_REQUEST);
    try {
        const {data} = await api.post("/api/admin/food", menu, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("--- Created menu: ", data);
        dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data})
    }
    catch(error) {
        dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: error})
    }

}
// Get menu item by restaurant id
export const getMenuItemByRestaurantId = ({reqData}) => async(dispatch) => {
    dispatch(GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST);
    try {
        const {data} = await api.get(
            `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}
            &seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`, 
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("--- Menu items by restaurant id: ", data);
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data})
    }
    catch(error) {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error})
    }
}
// Search menu item
export const searchMenuItem = ({keyword, jwt}) => async(dispatch) => {
    dispatch(SEARCH_MENU_ITEM_REQUEST);
    try {
        const {data} = await api.get(
            `/api/food/search?name=${keyword}`, 
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("--- Search items: ", data);
        dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data})
    }
    catch(error) {
        dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: error})
    }
}
// Get all ingredients of menu item
export const getAllIngredientsOfMenuItem = ({}) => async(dispatch) => {
    dispatch(GET_ALL_INGREDIENTS_ITEM_REQUEST);
    try {
        const {data} = await api.get(
            `/api/food/search?name=${keyword}`, 
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("--- Search items: ", data);
        dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data})
    }
    catch(error) {
        dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: error})
    }
}

// Update menu items availability
export const updateMenuItemsAvailability = ({foodId, jwt}) => async(dispatch) => {
    dispatch(UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST);
    try {
        const {data} = await api.put(
            `/api/admin/food/${foodId}`, 
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("--- UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS: ", data);
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data})
    }
    catch(error) {
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error})
    }
}
// Delete food
export const deleteFood = ({foodId, jwt}) => async(dispatch) => {
    dispatch(DELETE_MENU_ITEM_REQUEST);
    try {
        const {data} = await api.put(
            `/api/food/${foodId}`, 
            {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("--- DELETE_MENU_ITEM_SUCCESS: ", data);
        dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload: foodId})
    }
    catch(error) {
        dispatch({type: DELETE_MENU_ITEM_FAILURE, payload: error})
    }
}