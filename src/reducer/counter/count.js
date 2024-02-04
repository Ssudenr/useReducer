import { INCREMENT, DECREMENT, RESET } from "./actionType";


export const initialCountState=0

export const countReducer=(state, action)=>{
    switch (action) {
        case INCREMENT:
            console.log(INCREMENT);
            return state+1
        case DECREMENT:
            console.log(DECREMENT);
            return state-1
        case RESET:
            console.log(RESET);
            return initialCountState
        default:
            console.log("Olmayan Action");
            return state
    }
}