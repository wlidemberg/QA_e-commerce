import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function AddToCartModal({ open, onClose, onGoToCart }) {
    if (!open)
        return null;
    return (_jsx("div", { "data-testid": "add-to-cart-modal", className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 shadow-lg", children: _jsxs("div", { className: "w-full max-w-sm rounded-xl bg-white p-6 shadow-xl", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Produto adicionado ao carrinho!" }), _jsxs("div", { className: "mt-6 flex flex-col gap-3", children: [_jsx("button", { "data-testid": "go-to-cart", onClick: onGoToCart, className: "bg-[var(--color-brand-primary)] text-white py-2 rounded  -lg font-medium", children: "Ir para o carrinho" }), _jsx("button", { "data-testid": 'continue-shopping', onClick: onClose, className: "border py-2 rounded-lg", children: "Continuar comprando" })] })] }) }));
}
