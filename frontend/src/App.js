import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/'>
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
