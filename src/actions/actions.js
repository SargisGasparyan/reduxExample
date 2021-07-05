import date from '../data.json'
export const addNames=()=>(dispatch)=>{
    dispatch({
        type: "ADD_NAMES",
        payload:{
        names:date.carnames
        }
    })
}

export const addPrices=()=>(dispatch)=>{
    dispatch({
        type: "ADD_PRICES",
        payload:{
        names:date.carprices
        }
    })
}