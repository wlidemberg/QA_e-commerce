import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const redirect = params.get("redirect") || "/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const ok = login(email, password);
        if (ok) {
            navigate(redirect, { replace: true });
        }
        else {
            alert("Usuário ou senha inválidos");
        }
    }
    return (_jsx("div", { className: 'min-h-screen flex items-center justify-center bg-[var(--color-background-main)] px-4', children: _jsxs("form", { onSubmit: handleSubmit, className: 'w-full max-w-md rounded-2xl bg-[var(--color-brand-soft)] p-8 shadow-xl space-y-6', children: [_jsx("h1", { className: 'text-xl font-semibold text-center', children: "Entra na conta" }), _jsxs("div", { className: 'space-y-2 text-left', children: [_jsx("label", { className: 'text-sm font-medium ', children: "Email" }), _jsx("input", { "data-testid": "login-email", type: "text", className: 'w-full border rounded-lg px-3 py-2', value: email, onChange: e => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: 'space-y-2 text-left', children: [_jsx("label", { className: 'text-sm font-medium', children: "Senha" }), _jsx("input", { "data-testid": "login-password", type: "password", className: 'w-full border rounded-lg px-3 py-2', value: password, onChange: e => setPassword(e.target.value), required: true })] }), _jsx("div", { className: 'mt-16', children: _jsx("button", { "data-testid": "login-submit", className: 'w-full rounded-lg bg-[var(--color-brand-primary)] py-3 text-white font-medium', children: "Entrar" }) })] }) }));
}
export default Login;
