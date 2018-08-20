
import axios from 'axios';
//lib
import config from '../../config';

//config
const BASE_URL = config.BASE_URL


export const loadPeriod = (id)=>{
    return(dispatch) =>{
        dispatch({type:'LOAD_PERIOD_PENDING'})
        return axios.get(`${BASE_URL}/products/${id}`,{
            }).then(results =>{
                dispatch({type:'LOAD_PERIOD_SUCCESS', payload:results.data})  
            }).catch(err=>{
                dispatch({type:'LOAD_PERIOD_REJECTED',payload: err.message})
            })  
    }
}
