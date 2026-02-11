import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
export function Checkout() {
    const { items, total, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [payment, setPayment] = useState("pix");
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        // Se não logado vai para login
        if (!user) {
            navigate("/login?redirect=/checkout", { replace: true });
            return;
        }
        // carrinho vazio → home
        if (items.length === 0) {
            navigate("/", { replace: true });
        }
    }, [user, items.length, navigate]);
    function handleConfirm() {
        //clearCart();
        setSuccess(true);
    }
    if (!user)
        return null;
    if (!success && items.length === 0)
        return null;
    if (success) {
        return (_jsx("div", { "data-testid": "checkout-success", className: "min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-xl text-center space-y-4", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Pedido Confirmado" }), _jsxs("p", { children: ["Obrigado ", user.name, ". Seu pagamento via ", payment.toUpperCase(), " foi simulado com sucesso!"] }), _jsx("button", { "data-test-id": "back-to-home", onClick: clearCart, className: "mt-4 bg-[var(--color-brand-primary)] text-white px-4 py-2 rounded-lg", children: "Voltar para a loja" })] }) }));
    }
    return (_jsxs("div", { className: "max-w-4xl mx-auto px-6 py-10 space-y-8", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Finalizar Compra" }), _jsxs("section", { className: "bg-white rounded-lg p-6 shadow-sm space-y-1", children: [_jsx("p", { className: "text-sm text-gray-500", children: "Cliente" }), _jsxs("p", { "data-testid": "checkout-user", className: "font-medium", children: [user.name, " ", user.email] })] }), _jsxs("section", { className: "bg-white rounded-xl p-6 shadow-sm", children: [_jsx("h2", { className: "font-semibold mb-4", children: "Resumo do Pedido" }), _jsx("ul", { className: "space-y-2", children: items.map(item => (_jsxs("li", { "data-testid": "checkout-item", className: "flex justify-between text-sm", children: [_jsxs("span", { children: [item.product.name, " (", item.quantity, ")"] }), _jsxs("span", { children: ["R$ ", (item.product.price * item.quantity).toFixed(2)] })] }, item.product.id))) }), _jsxs("div", { "data-testid": "checkout-total", className: "text-right font-bold mt-4", children: ["Total: R$ ", total.toFixed(2)] })] }), _jsxs("section", { "data-testid": "payment-method", className: "bg-white rounded-xl p-6 shadow-sm space-y-4", children: [_jsx("h2", { className: "font-semibold", children: "Forma de Pagamento" }), _jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { "data-testid": 'payment-pix', type: "radio", name: "payment", checked: payment === "pix", onChange: () => setPayment("pix") }), "Pix"] }), _jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { "data-testid": "payment-card", type: "radio", name: "payment", checked: payment === "card", onChange: () => setPayment("card") }), " Cart\u00E3o"] }), _jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { "data-testid": "payment-boleto", type: "radio", name: "payment", checked: payment === "boleto", onChange: () => setPayment("boleto") }), " Boleto"] })] }), _jsx("div", { className: "flex justify-end", children: _jsx("button", { "data-testid": "confirm-order", onClick: handleConfirm, className: "bg-[var(--color-brand-primary)] text-white px-6 py-3 rounded-lg", children: "Confirmar Pedido" }) })] }));
}
