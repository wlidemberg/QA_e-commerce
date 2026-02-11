import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { Checkout } from './components/Checkout';
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/Login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) })] }));
}
export default App;
