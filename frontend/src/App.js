import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/">
              <Route exact path="/register" element={<Register />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
