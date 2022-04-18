import axios from 'axios'

export const actions = {
    setItems: "SET_ITEMS"
}

export const setItems = items => ({
    type: actions.setItems,
    payload: items
})

export const getItemsThunk = () => {
    return dispatch => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then(res => dispatch(setItems(res.data)))
    }
}