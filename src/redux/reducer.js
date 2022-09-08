import {AddToCart, RemoveToCart,EmptyToCart} from './constant'

export const cartData = (data=[],action)=>{

    switch(action.type){
        case AddToCart:
            // add to cart logic
            console.warn(action);
            return [action.data,...data];
        case RemoveToCart:
             // remove to cart logic
            console.warn("remove",action);
            // data.length=data.length?data.length-1:[]
            const remainingItem = data.filter((item)=>item.id!==action.data);
            console.warn("remainingItem",remainingItem);
            return [...remainingItem];
        case EmptyToCart:
             // remove to cart logic
            console.warn(action.data);
            data=[]
            return [...data];
        default:
            // no
            return data;    
    }
}