import axios from 'axios'

export const actions = {
    setItems: "SET_ITEMS",
    setIsLoading: "SET_IS_LOADING",
    setCategories: "SET_CATEGORIES"
}

export const setItems = items => ({
    type: actions.setItems,
    payload: items
})

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading, 
    payload: isLoading
})

export const setCategories = categories => ({
    type: actions.setCategories, 
    payload: categories
})


export const getItemsThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then(res => dispatch(setItems(res.data.data.products)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}

export const getCategoriesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then(res => dispatch(setCategories(res.data.data.products)))
            .finally(() => dispatch(setIsLoading(false)))
    }
} 