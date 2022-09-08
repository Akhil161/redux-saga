import {SetProductList} from './constant'

export const productData = (data=[],action)=>{

    switch(action.type){
     
            case SetProductList:
                // display product 
                console.warn("Set",action);
                return [...action.data];
        default:
            // no
            return data;    
    }
}