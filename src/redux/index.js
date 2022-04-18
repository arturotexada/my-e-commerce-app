//import { Action } from "history";
import { actions } from "./actions";

const INITIAL_STATE = {
    items: [],
    isLoading: true
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

            case actions.setItems:
                return {
                    ...state,
                    items: action.payloadpayload
                }

        default:
            return state;
    }
}

export default reducer;