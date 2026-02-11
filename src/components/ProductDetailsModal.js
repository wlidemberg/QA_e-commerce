import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCart } from "../context/CartContext";
export function ProductDetailsModal({ product, open, onClose, onAddSuccess }) {
    const { addToCart } = useCart();
    if (!open || !product)
        return null;
    function handleAdd() {
        if (!product)
            return;
        addToCart(product);
        onAddSuccess();
    }
    return (_jsx("div", { "data-testid": "product-details-modal", className: "fixed inset-0 z-50 flex justify-center items-center bg-black/60", children: _jsxs("div", { className: "w-full max-w-4xl bg-white rounded-2xl p-8 shadow-xl grid grid-cols-2 gap-8", children: [_jsx("div", { className: "grid grid-cols-2 gap-3", children: [0, 1, 2, 3].map(i => (_jsx("img", { src: product.image, alt: product.image, className: "w-full h-40 object-cover rounded-lg border" }, i))) }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx("h2", { className: "text-2xl font-semibold", children: product.name }), _jsx("p", { className: "text-gray-500", children: product.brand }), _jsxs("p", { className: "text-3xl font-bold text-[var(--color-brand-primary)]", children: ["R$ ", product.price.toFixed(2)] }), _jsx("div", { className: "flex gap-2 flex-wrap", children: product.sizes.map(size => (_jsx("span", { className: "border rounded-md px-3 py-1 text-sm", children: size }, size))) }), _jsx("p", { className: "text-sm text=gray-600", children: "T\u00EAnis premium para uso urbano e esportivo" }), _jsxs("div", { className: "mt-auto flex gap-3", children: [_jsx("button", { "data-testid": "details-add-to-cart", disabled: !product.isAvailable, onClick: handleAdd, className: "flex-1 bg-[var(--color-brand-primary)] text-white rounded-lg py-2 disabled:opacity-50", children: "Adicionar ao Carrinho" }), _jsx("button", { "data-testid": "details-close", onClick: onClose, className: "flex-1 border rounded-lg py-2", children: "Voltar" })] })] })] }) }));
}
