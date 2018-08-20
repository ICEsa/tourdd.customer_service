import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import periodReducers from './periodReducers';

const rootReducers = combineReducers({
    form: formReducer,
    periodReducers,
});
export default rootReducers;    
