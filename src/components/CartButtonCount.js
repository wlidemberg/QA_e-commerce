import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCart } from "../context/CartContext";
import { RiShoppingCart2Fill } from "react-icons/ri";
export function CartButtonCount() {
    const { items } = useCart();
    const count = items.reduce((acc, i) => acc + i.quantity, 0);
    return (_jsx("button", { "data-testid": "cart-count", className: "relative", children: _jsxs("span", { className: "flex gap-2 text-lg text-[var(--color-brand-primary)]", children: [_jsx(RiShoppingCart2Fill, { "data-testid": "icon-cart", size: "2em" }), " ", count] }) }));
}
