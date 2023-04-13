export const initialState = {
    name:"avi",
    age:"27"
}

type actionType ={
    type:string,
    payload:string
}

export const reducer = (state:typeof initialState,action:actionType )=>{
if(action.type==="CHANGE_NAME"){
    return{
        ...state,name:action.payload
    }
}
if(action.type==="UPDATE_AGE"){
    return {
        ...state,age:action.payload
    }
}
return state 
}