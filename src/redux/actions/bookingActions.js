
import axios from 'axios';
//lib
import config from '../../config';

//config
const BASE_URL = config.BASE_URL

export const createBooking =  (values) => {
    return (dispatch) => {
        dispatch({ type: 'CREATE_BOOKING_PENDING' })
        return axios({
            method: 'post',
            url: `${BASE_URL}/booking/`,
            data: { values }
        }).then(results => {
            return dispatch({ type: 'CREATE_BOOKING_SUCCESS', payload: results.data })
        }).catch(err => {
            return dispatch({ type: 'CREATE_BOOKING_REJECTED', payload: err.message })
        })
    }
}
