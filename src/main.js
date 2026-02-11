import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(AuthProvider, { children: _jsx(CartProvider, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }) }));
