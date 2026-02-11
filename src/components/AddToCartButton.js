import { jsx as _jsx } from "react/jsx-runtime";
export function AddToCartButton({ onClick, disabled }) {
    return (_jsx("button", { "data-testid": "add-to-cart", type: "button", disabled: disabled, onClick: onClick, className: "bg-brand-primary text-white px-4 py-2 rounded", children: "Adicionar ao Carrinho" }));
}
