import * as ActionTypes from './ActionTypes';

export const signup = (state = {
    name: "",
    email: "",
    userType: "",
    password: ""
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { 
                name: action.payload[0],
                email: action.payload[1],
                userType: action.payload[2],
                password: action.payload[3]
            };
        default:
            return state;
    }
};