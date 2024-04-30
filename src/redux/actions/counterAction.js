import { INCREMENT, DECREMENT,CLEAR } from "../types/counterType";

//ARTTIR
export const increment=()=>{
    return {type:INCREMENT}
}

//AZALT
export const decrement= ()=>{
    return {type:DECREMENT}
}

//SIFIRLA
export const clear=()=>{
    return {type:CLEAR}
}