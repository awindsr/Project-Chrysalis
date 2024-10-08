import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    // ... other reducers can be added here
});

export default rootReducer;
