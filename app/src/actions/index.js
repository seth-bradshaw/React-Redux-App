import axios from 'axios'

export const FETCH_DOGGOS_START = 'FETCH_DOGGOS_START';
export const FETCH_DOGGOS_SUCCESS = 'FETCH_DOGGOS_SUCCESS';
export const FETCH_DOGGOS_FAILURE = 'FETCH_DOGGOS_FAILURE';

export const getDoggoData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DOGGOS_START})

        axios
            .get('https://dog.ceo/api/breeds/image/random/50')
            .then((res) => {
                dispatch({type: FETCH_DOGGOS_SUCCESS, payload: res.data.message})
            })
            .catch((err) => {
                dispatch({type: FETCH_DOGGOS_FAILURE, payload: err})
            })
    }
}