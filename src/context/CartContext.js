import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const CartContext = createContext(null);
export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    function clearCart() {
        setItems([]);
    }
    function addToCart(product) {
        if (!product.isAvailable)
            return;
        setItems((prev) => {
            const existing = prev.find(i => i.product.id === product.id);
            if (existing) {
                return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { product, quantity: 1 }];
        });
    }
    function removeFromCart(productId) {
        setItems(prev => prev.filter(i => i.product.id !== productId));
    }
    const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    return (_jsx(CartContext.Provider, { value: { items, addToCart, removeFromCart, clearCart, total }, children: children }));
}
export function useCart() {
    const context = useContext(CartContext);
    if (!context)
        throw new Error('useCart must be used within CartProvider');
    return context;
}
