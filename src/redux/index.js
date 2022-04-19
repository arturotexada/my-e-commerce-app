//import { Action } from "history";
import { actions } from "./actions";

const INITIAL_STATE = {
    items: [],
    isLoading: false,
    categories: []

}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

            case actions.setItems:
                return {
                    ...state,
                    items: action.payload
                }

            case actions.setIsLoading:
                return {
                    ...state,
                    isLoading: action.payload 
                }    

                
            case actions.setCategories:
                return {
                    ...state,
                    categories: action.payload 
                }      

        default:
            return state;
    }
}

export default reducer;