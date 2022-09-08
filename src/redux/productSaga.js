import {takeEvery,put} from 'redux-saga/effects'
import { ProductList, SearchProduct, SetProductList } from './constant';


function* getProducts(){
    let data= yield fetch('http://localhost:3500/product');
    data = yield data.json();
    yield put({type:SetProductList,data})
}
function* getSearchProducts(data){
    let result= yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    yield put({type:SetProductList,data:result})
}

function* productSaga(){
yield takeEvery(ProductList,getProducts)
yield takeEvery(SearchProduct,getSearchProducts)

}

export default productSaga;