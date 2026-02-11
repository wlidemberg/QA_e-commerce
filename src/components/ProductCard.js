import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { AddToCartModal } from './AddToCartModal';
import { AddToCartButton } from './AddToCartButton';
import { ProductDetailsModal } from './ProductDetailsModal';
export function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [selectProduct, setSelecetProduct] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    function handleAddToCart() {
        if (!product.isAvailable)
            return;
        addToCart(product);
        setShowModal(true);
    }
    function handleGoToCart() {
        setShowModal(false);
        navigate("/?openCart=true");
    }
    return (_jsxs("div", { "data-testid": "product-card", className: 'rounded-2xl gb-white shadow-sm hover:shadow-md transition overflow-hidden', children: [_jsx("img", { src: product.image, alt: product.name, className: 'h-56 w-full object-cover' }), _jsxs("div", { className: 'p-4 space-y-2', children: [_jsx("span", { className: 'text-sm text-gray-500', children: product.brand }), _jsx("h2", { "data-testid": "product-name", className: 'text-lg font-semibold', children: product.name }), _jsxs("p", { "data-testid": "product-price", className: 'text-[var(--color-brand-primary)] font-bold- text-xl', children: ["R$ ", product.price.toFixed(2)] }), product.isAvailable ? (_jsxs("div", { children: [_jsx("div", { children: _jsx(AddToCartButton, { onClick: handleAddToCart, disabled: !product.isAvailable }) }), _jsx("div", { children: _jsx("button", { "data-testid": "open-product-details", onClick: () => { setSelecetProduct(product); setOpenDetails(true); }, children: "Ver Detalhes" }) })] })
                    // <button
                    //     onClick={handleAddToCart}
                    //    className='mt-4 bg-brand-primary text-white px-4 py-2 rounded'
                    // >Adicionar ao carrinho</button>
                    ) : (_jsx("span", { "data-testid": "product-unavailable", className: 'inline-block text-sm text-red-600 font-medium', children: "Indispon\u00EDvel" }))] }), _jsx(ProductDetailsModal, { open: openDetails, product: selectProduct, onClose: () => setOpenDetails(false), onAddSuccess: () => {
                    setOpenDetails(false);
                    setShowModal(true);
                } }), _jsx(AddToCartModal, { open: showModal, onClose: () => setShowModal(false), onGoToCart: handleGoToCart })] }));
}
