import { AUTHENTICATE} from "../actions/auth";
const initialState={
    token:null,
    userId:null,
    role:null
}

export default (state = initialState,action)=>{
    switch(action.type){
        case AUTHENTICATE:
            return{
                ...state,
                token:action.token,
                userId:action.userId,
                role:action.role
            }
        
        default : return state 
    }
}