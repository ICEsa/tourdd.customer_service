

const initialState = {
    createBooking:{data:null, isLoading:true, isRejected:false},

}

export default (state = initialState, action) =>{
    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'CREATE_BOOKING_PEDING':
        return {...state, createBooking:{data:null, isLoading:true, isRejected:false}}
        case'CREATE_BOOKING_SUCCESS':
        return{...state, createBooking:{data:action.payload, isLoading:false, isRejected:false}}
        case'CREATE_BOOKING_REJECTED':
        return{...state, createBooking:{data:action.payload, isLoading:false, isRejected:true}}

       
        default: 
        return state
    }
}