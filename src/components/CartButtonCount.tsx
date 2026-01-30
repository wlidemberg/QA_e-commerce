import { useCart } from "../context/CartContext";
import { RiShoppingCart2Fill } from "react-icons/ri";

export function CartButtonCount(){
    const { items } = useCart();

    const count = items.reduce((acc, i) => acc + i.quantity, 0);

    return(
        <button data-testid="cart-cound" className="relative">
            <span className="flex gap-2 text-lg text-[var(--color-brand-primary)]"><RiShoppingCart2Fill size="2em" /> {count}</span>
        </button>
    );
}
