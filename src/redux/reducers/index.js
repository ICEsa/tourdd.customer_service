import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import periodReducers from './periodReducers';
import bookingReducers from './bookingReducers';



const rootReducers = combineReducers({
    form: formReducer,
    periodReducers,
    bookingReducers
});
export default rootReducers;    