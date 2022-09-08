import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {searchProduct} from '../redux/productAction'

export default function Header() {
    const result = useSelector((state)=>{
      return  state.cartData;
    })
    const dispatch = useDispatch();
  console.log(result);
  return (
    <div className='header'>
    <Link to='/'> <h1 className='logo-name'>E-Comm</h1></Link>
      <div className='search-box'>
         <input type='text' placeholder='Search Product'onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
      </div>
      <Link to='/cart'>
       <div className='cart-div'>
            <span>{result.length}</span>
            <img src='./cart.png ' alt=''/>
       </div>
       </Link>
    </div>
  )
}
