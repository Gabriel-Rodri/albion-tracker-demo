import {
    GET_NAMES,
} from '../actions'

const initialState = {
    Player : [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NAMES: //para mi searchbar
            return {
                ...state,
                Player: action.payload
            };
            default:
                return state;
    }
}

export default rootReducer