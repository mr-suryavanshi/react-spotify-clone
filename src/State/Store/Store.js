import { createStore } from "redux";

const initialState = {
    loggedin : "redux is working",
    isModal : false,
    isLoggedIn: false,
    play : " "
}

const handleState = (state = initialState, action) =>{
    switch (action.type){
        case 'LOGGED_IN':
            return{
                ...state,
                loggedIn :action.loggedIn,
                isLoggedIn : true
            }
        case 'CURRENT_SONG':
            return{
                ...state,
                play: action.play
            }
        default:
            return state;
    }
}

const store = createStore(handleState);

export default store;