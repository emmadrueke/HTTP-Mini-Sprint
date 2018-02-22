import { combineReducers } from 'redux';
import { GET_FRIENDS } from '../actions';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;


    // on a pure function
    // do not rely on outside information
    // never, ever, change outside state
