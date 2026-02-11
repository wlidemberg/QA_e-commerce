import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartButtonCount } from './CartButtonCount';
import { CartDrawer } from './CartDrawer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
export function Header() {
    const [isOpenCart, setIsOpenCart] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const openCart = params.get("openCart");
        if (openCart === "true") {
            setIsOpenCart(true);
        }
    }, [location.search]);
    return (_jsxs(_Fragment, { children: [_jsx("header", { "data-testid": "header", className: "bg-white border-b border-gray-200", children: _jsxs("div", { className: "max-w-7xl mx-auto px-8 py-5 flex items-center justify-between", children: [_jsxs("div", { "data-testid": "logo", className: "text-2xl font-bold tracking-tight text-[var(--color-brand-primary)]", children: ["QA ", _jsx("span", { className: "text-black", children: "Store" })] }), _jsxs("nav", { className: "flex gap-8 text-sm font-medium text-gray-700", children: [_jsx("a", { href: "", className: "hover:text-[var(--color-brand-primary)] trasition", children: "Home" }), _jsx("a", { href: "", className: "hover:text-[var(--color-brand-primary)] transition", children: "T\u00EAnis" }), _jsx("a", { href: "", className: "hover:text-[var(--color-brand-primary)] transition", children: "Cole\u00E7\u00F5es" }), _jsx("a", { href: "", className: "hover:text-[var(--color-brand-primary)] transition", children: "Contato" })] }), _jsxs("div", { className: 'flex gap-2', children: [!user ? (_jsxs("button", { "data-testid": "link-login", className: 'flex items-center justify-center gap-2 font-semibold hover:text-[var(--color-brand-primary)] mr-4 transition-all', onClick: () => {
                                        navigate(`/login?redirect=${location.pathname}`);
                                    }, children: [_jsx(RiLoginCircleFill, { size: "2em", color: "green" }), "Login"] })) : (_jsxs("div", { className: 'flex items-center justify-center ', children: [_jsx("button", { "data-testid": "link-logout", onClick: logout, children: _jsx(RiLogoutCircleFill, { size: "2em", color: 'var(--color-brand-primary)' }) }), _jsxs("p", { className: 'text-sm font-semibold text-[var(--color-brand-secondary)] mr-4', "data-testid": "user-name", children: ["Ol\u00E1, ", user.name] })] })), _jsx("button", { "data-testid": "header-btn-open-cart", onClick: () => setIsOpenCart(true), children: _jsx(CartButtonCount, {}) })] })] }) }), _jsx(CartDrawer, { isOpen: isOpenCart, onClose: () => {
                    setIsOpenCart(false);
                    navigate("/", { replace: true });
                } })] }));
}
