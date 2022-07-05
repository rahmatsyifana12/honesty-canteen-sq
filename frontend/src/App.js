import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import AddProduct from './components/Product/AddProduct';
import Home from './components/Home/Home';
import CanteenBalanceBox from './components/Canteen/CanteenBalanceBox';
import Inbox from './components/Inbox/Inbox';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/'>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/products' element={<Product />} />
              <Route exact path='/products/add' element={<AddProduct />} />
              <Route exact path='/canteen' element={<CanteenBalanceBox />} />
              <Route exact path='/inboxes' element={<Inbox />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
