import { createContext, useContext, useState } from "react";
import type{ Product } from "../types/product.ts";
import type { CartItem } from "../types/cartItem";

type CartContextType = {
    items:CartItem[]
    addToCart:(product:Product) => void
    removeFromCart: (productId:string) => void
    total:number
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({children}:{children:React.ReactNode}){
    const [items, setItems] = useState<CartItem[]>([]);

    function addToCart(product:Product){
        if(!product.isAvailable) return;

        setItems((prev) => {
            const existing = prev.find(i => i.product.id === product.id)
            if(existing){
                return prev.map(
                    i => i.product.id === product.id ? {...i, quantity:i.quantity + 1}:i
                )
            }
            return [...prev, {product, quantity:1}]
        });
    }

    function removeFromCart(productId:string){
        setItems(prev => prev.filter(i => i.product.id !== productId))
    }

    const total = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity, 0 
    );

    return(
        <CartContext.Provider value={{ items, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>    
    )
}

export function useCart(){
    const context = useContext(CartContext)
    if(!context) throw new Error('useCart must be used within CartProvider')
        return context
}