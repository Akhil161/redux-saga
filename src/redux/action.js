 import {AddToCart, RemoveToCart,EmptyToCart} from './constant'
 export const addToCart = (data)=>{
    console.warn(data);
    return{
        type:AddToCart,
        data 
    }
 }

 export const removeToCart = (data)=>{
    console.warn(data);
    return{
        type:RemoveToCart,
        data 
    }
 }

 export const emptyToCart = ()=>{
    
    return{
        type:EmptyToCart,
    }
 }