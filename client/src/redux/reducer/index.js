import {
    GET_NAMES,
} from '../actions'

const initialState = {
    allVideogames : [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NAMES: //para mi searchbar
            return {
                ...state,
                allVideogames: action.payload
            };
    }
}

export default rootReducer