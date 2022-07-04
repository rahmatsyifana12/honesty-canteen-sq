import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import AddProduct from './components/Product/AddProduct';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/'>
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/' element={<Product />} />
              <Route exact path='/products' element={<AddProduct />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
