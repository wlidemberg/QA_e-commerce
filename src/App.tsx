import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import Login from './pages/Login';
import { Checkout } from './components/Checkout';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
  );
}

export default App
