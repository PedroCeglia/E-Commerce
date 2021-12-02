const typeList = {
    SET:'SET_USER'
}   

// Initial State Store
const INITIAL_STATE = {
    user:{
        exist:false,
        user:{}
    }
}

// Reducer Store
export default function user(state=INITIAL_STATE, action){
    if(action.type === typeList.SET){
        return{...state, user:action.user}
    }
    return state
}

export const userActions = {
    setUser: (exist, user) =>({
        type: typeList.SET,
        user:{
            exist:exist,
            user:user
        }
    })
}