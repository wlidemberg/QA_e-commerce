import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

type Props = {
    product:Product
}

export function AddToCartButton({product}:Props){
    const { addToCart } = useCart();
    if(!product.isAvailable){
        return(
            <span className="text-red-500 font-semibold">Indisponível</span>
        );
    }
    return(
        <button
            data-testid="add-to-cart"
            onClick={() => addToCart(product)}
            className="bg-brand-primary text-white px-4 py-2 rounded"
        >Adicionar ao Carrinho</button>
    );
}