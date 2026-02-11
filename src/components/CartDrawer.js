import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCart } from '../context/CartContext';
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
export function CartDrawer({ isOpen, onClose }) {
    const { items, removeFromCart, total } = useCart();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    if (!isOpen)
        return null;
    function handleCheckOut() {
        if (!user) {
            navigate("/login?redirect=/?openCart=true");
            return;
        }
        navigate("/checkout");
    }
    return (_jsxs("div", { className: 'fixed inset-0 z-50 flex', children: [_jsx("div", { "data-testid": "cart-overlay", className: 'flex-1 bg-black/80', onClick: onClose }), _jsxs("aside", { "data-testid": "cart-drawer", className: 'w-full md:w-150 bg-white p-6 shadow-xl', children: [_jsxs("div", { "data-testid": "logo", className: 'flex justify-between items-center mb-8 border-b border-[var(--color-brand-primary)] pb-2', children: [_jsxs("h2", { className: "text-4xl text-left font-bold tracking-tight text-[var(--color-brand-primary)] ", children: ["QA ", _jsx("span", { className: "text-black", children: "Store" })] }), _jsx("div", { className: 'flex gap-2', children: !user ? (_jsxs("button", { "data-testid": "link-login", className: 'flex items-center justify-center gap-2 font-semibold hover:text-[var(--color-brand-primary)] mr-4 transition-all', onClick: () => {
                                        if (!user) {
                                            navigate("/login?redirect=/?openCart=true");
                                        }
                                    }, children: [_jsx(RiLoginCircleFill, { size: "2em", color: "green" }), "Login"] })) : (_jsxs("div", { className: 'flex items-center justify-center ', children: [_jsx("button", { "data-testid": "link-logout", onClick: logout, children: _jsx(RiLogoutCircleFill, { size: "2em", color: 'var(--color-brand-primary)' }) }), _jsxs("p", { className: 'text-sm font-semibold text-[var(--color-brand-secondary)] mr-4', children: ["Ol\u00E1, ", user.name] })] })) })] }), _jsx("h2", { "data-testid": "text-your-cart", className: 'text-2xl font-bold mb-4', children: "Seu Carrinho" }), _jsx("ul", { children: items.map(item => (_jsxs("li", { "data-testid": "cart-item", className: 'flex justify-between items-center gap-2', children: [_jsxs("div", { className: 'w-screen text-left border rounded-lg p-2 mb-2', children: [_jsx("p", { className: 'font-medium', children: item.product.name }), _jsxs("p", { className: 'w-full text-sm text-gray-500', children: [item.quantity, "x \u2022 R$ ", item.product.price.toFixed(2)] })] }), _jsx("button", { onClick: () => removeFromCart(item.product.id), className: 'text-sm text-red-400 flex items=center border rounded-lg p-4 mb-2 hover:text-white hover:bg-red-800 transition-all', "data-testid": "remove-item", children: _jsx(RiDeleteBin3Fill, { size: "2em" }) })] }, item.product.id))) }), items.length === 0 ? (_jsx("p", { "data-testid": "cart-is-empty", className: 'bg-gray-100 text-2xl text-gray-500 border rounded-4xl py-4', children: "Carrinho est\u00E1 vazio" })) : (_jsxs("div", { className: "flex justify-between items-center py-2 gap-2", children: [_jsx("button", { "data-testid": "cart-btn-finalize-purchase", className: 'w-full bg-[var(--color-brand-secondary)] rounded-lg py-2 px-4 text-white', onClick: handleCheckOut, children: "Finalizar Compra" }), _jsx("button", { "data-testid": "cart-btn-continue-shopping", className: 'w-full bg-[var(--color-brand-secondary)] rounded-lg py-2 px-4 text-white', onClick: onClose, children: "Continuar Comprando" })] })), _jsxs("div", { "data-testid": "cart-total", className: 'text-2xl mt-6 font-bold text-right', children: ["Total: R$ ", total.toFixed(2)] })] })] })
    // <div data-testid="cart-drawer" className='p-4 bg-white shadow-lg'>
    //     {items.map(item => (
    //         <div key={item.product.id} data-testing="cart-item" className='flex justify-between'>
    //             <span>{item.product.name}</span>
    //             <span>{item.quantity}x</span>
    //             <button
    //                 onClick={() => removeFromCart(item.product.id)}
    //                 className='text-red-500'
    //             >Remover</button>
    //         </div>
    //     ))}
    //     <div data-testid="cart-total" className='font-bold mt-4'>
    //         Total: R$ {total.toFixed(2)}
    //     </div>
    // </div>
    );
}
