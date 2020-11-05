import {FETCH_DOGGOS_START, FETCH_DOGGOS_SUCCESS, FETCH_DOGGOS_FAILURE} from '../actions'

const initialState = {
    isLoading: false,
    doggoData: [],
    error: ''
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_DOGGOS_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DOGGOS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                doggoData: action.payload
            }
        case FETCH_DOGGOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
