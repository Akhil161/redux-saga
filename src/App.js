
import './App.css';
import Main from './component/Main';
import Header from './component/Header';
import Cart from './component/Cart';
import {Route,Routes} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<Main/>}/>
         <Route path='/cart' element={<Cart/>}/>

       </Routes>
    </div>
  );
}

export default App;
