import { createStore } from "redux";

const initialState = {
    isModal : false,
    isLoggedIn: false,
    play : " "
}

const handleState = (state = initialState, action) =>{
    switch (action.type){
        case 'LOGGED_IN':
            console.log("LOGGED_IN", action);
            return{
                ...state,
                isLoggedIn : action.isLoggedIn
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