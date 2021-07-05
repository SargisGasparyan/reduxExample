export const fetchCars=(state=[],action)=>{
    switch(action.type){
        case "ADD_NAMES":
            return {
                ...state,
                nm:action.payload
            }
        case "ADD_PRICES":
            return{
                ...state,
                pc:action.payload
            }
        default:
            return state
    }
}