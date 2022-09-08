import {ProductList,SearchProduct} from './constant'


export const productList = ()=>{
    return{
        type:ProductList,
    }
 }
 export const searchProduct = (query)=>{
    console.warn("Set Action  ",query);
    return{
        type:SearchProduct,
        query
    }
 }
