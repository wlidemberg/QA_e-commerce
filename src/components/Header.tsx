import { useState } from 'react';
import { CartButtonCount } from './CartButtonCount';
import { CartDrawer } from './CartDrawer';
import { useAuth } from '../context/AuthContext';

import { RiLoginCircleFill, RiLogoutCircleFill  } from "react-icons/ri";


export function Header(){
    const [isOpenCart, setIsOpenCart] = useState(false);
    const { user, login, logout } = useAuth();

    return(
        <>
            <header data-testid="header" className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
                    {/* Logo */}
                    <div data-testid="logo" className="text-2xl font-bold tracking-tight text-[var(--color-brand-primary)]">
                        QA <span className="text-black">Store</span>
                    </div>

                    {/* Navegação */}
                    <nav className="flex gap-8 text-sm font-medium text-gray-700">
                        <a href="" className="hover:text-[var(--color-brand-primary)] trasition">
                            Home
                        </a>                    
                        <a href="" className="hover:text-[var(--color-brand-primary)] transition">
                            Tênis
                        </a>                    
                        <a href="" className="hover:text-[var(--color-brand-primary)] transition">
                            Coleções
                        </a>                    
                        <a href="" className="hover:text-[var(--color-brand-primary)] transition">
                            Contato
                        </a>                                     
                    </nav>

                    {/* Login/Logout */}
                    <div className='flex gap-2'>
                        {!user ? (
                            <button className='flex items-center justify-center gap-2 font-semibold hover:text-[var(--color-brand-primary)] mr-4 transition-all' onClick={login}>
                                <RiLoginCircleFill size="2em" color="green"/>
                                Login
                            </button>
                        ):(
                            <div className='flex items-center justify-center '>
                                <button
                                onClick={logout}
                                >
                                    <RiLogoutCircleFill size="2em" color='var(--color-brand-primary)'/>
                                </button>
                                <p className='text-sm font-semibold text-[var(--color-brand-secondary)] mr-4'>Olá, {user.name}</p>
                            </div>
                        )}
                        <button onClick={() => setIsOpenCart(true)}>
                            <CartButtonCount />
                        </button>
                    </div>
                    
                </div>
            </header>
            <CartDrawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />
        </>
    )
}