import { combineReducers } from 'redux';
import ImageReducer from './reducers/imageReducer';
import UserReducer from './reducers/userReducer';


const rootReducer = combineReducers({
    image: ImageReducer,
    user:UserReducer
});

export default rootReducer;