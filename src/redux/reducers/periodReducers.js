

const initialState = {
    period:{data:null, isLoading:true, isRejected:false},

}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_PERIOD_PENDING':
        return {...state, period:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_PERIOD_SUCCESS':
        return{...state, period:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_PERIOD_REJECTED':
        return{...state, period:{data:action.payload, isLoading:false, isRejected:true}}

       
        default: 
        return state
    }
}