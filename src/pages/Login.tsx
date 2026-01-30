import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login(){

    const { login } = useAuth();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const redirect = params.get("redirect") || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const ok = login(email, password);
        if(ok){
            navigate(redirect, {replace:true})
        }else{
            alert("Usuário ou senha inválidos");
        }
    }
    return(
        <div className='min-h-screen flex items-center justify-center bg-[var(--color-background-main)] px-4'>
            <form
                onSubmit={handleSubmit}
                className='w-full max-w-md rounded-2xl bg-[var(--color-brand-soft)] p-8 shadow-xl space-y-6'
            >
                <h1 className='text-xl font-semibold text-center'>Entra na conta</h1>
                <div className='space-y-2 text-left'>
                    <label className='text-sm font-medium '>Email</label>
                    <input
                        data-testid="logim-email" 
                        type="text"
                        className='w-full border rounded-lg px-3 py-2'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='space-y-2 text-left'>
                    <label className='text-sm font-medium'>Senha</label>
                    <input
                        data-testid="login-password" 
                        type="password"
                        className='w-full border rounded-lg px-3 py-2'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='mt-16'>
                    <button
                        data-testid="login-submit"
                        className='w-full rounded-lg bg-[var(--color-brand-primary)] py-3 text-white font-medium'
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Login;