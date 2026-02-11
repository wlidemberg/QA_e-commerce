
import { useCart } from '../context/CartContext';
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



import { RiLoginCircleFill, RiLogoutCircleFill  } from "react-icons/ri";


type Props = {
    isOpen:boolean
    onClose: () => void
}

export function CartDrawer({ isOpen, onClose }:Props){
    const { items, removeFromCart, total } = useCart();
    const { user, logout } = useAuth();
    const navigate = useNavigate();


    if (!isOpen) return null;

    function handleCheckOut(){
        if(!user){
            navigate("/login?redirect=/?openCart=true");
            return
        }
        navigate("/checkout")
    }

    return(

        <div className='fixed inset-0 z-50 flex'>
            {/* Overlay */}
            <div
                data-testid="cart-overlay"
                className='flex-1 bg-black/80'
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <aside
                data-testid="cart-drawer"
                className='w-full md:w-150 bg-white p-6 shadow-xl'
            >
                {/* Logo */}
                <div data-testid="logo" className='flex justify-between items-center mb-8 border-b border-[var(--color-brand-primary)] pb-2' >
                    <h2
                        className="text-4xl text-left font-bold tracking-tight text-[var(--color-brand-primary)] "
                    >QA <span className="text-black">Store</span></h2>

                    <div className='flex gap-2'>
                        {!user ? (
                            <button 
                                data-testid="link-login"
                                className='flex items-center justify-center gap-2 font-semibold hover:text-[var(--color-brand-primary)] mr-4 transition-all' 
                                onClick={() => {
                                    if(!user){
                                        navigate("/login?redirect=/?openCart=true");
                                    }
                                }}
                            >
                                <RiLoginCircleFill size="2em" color="green"/>
                                Login
                            </button>
                        ):(
                            <div className='flex items-center justify-center '>
                                <button
                                data-testid="link-logout"
                                onClick={logout}
                                >
                                    <RiLogoutCircleFill size="2em" color='var(--color-brand-primary)'/>
                                </button>
                                <p className='text-sm font-semibold text-[var(--color-brand-secondary)] mr-4'>Olá, {user.name}</p>
                            </div>
                        )}
                    </div>

                </div>

                <h2 
                    data-testid="text-your-cart"
                    className='text-2xl font-bold mb-4'
                >
                    Seu Carrinho
                </h2>
                
                <ul>
                    {items.map(item => (
                        <li
                            key={item.product.id}
                            data-testid="cart-item"
                            className='flex justify-between items-center gap-2'
                        >
                                <div className='w-screen text-left border rounded-lg p-2 mb-2'>
                                    <p className='font-medium'>{item.product.name}</p>
                                    <p className='w-full text-sm text-gray-500'>{item.quantity}x • R$ {item.product.price.toFixed(2)}
                                    </p>
                                    
                                </div>
                                
                                <button
                                    onClick={() => removeFromCart(item.product.id)}
                                    className='text-sm text-red-400 flex items=center border rounded-lg p-4 mb-2 hover:text-white hover:bg-red-800 transition-all'
                                    data-testid="remove-item"
                                ><RiDeleteBin3Fill size="2em" /></button>
                                
                               
                        </li>
                    ))}
                </ul>

                {items.length === 0 ? (
                    <p 
                        data-testid="cart-is-empty"    
                        className='bg-gray-100 text-2xl text-gray-500 border rounded-4xl py-4'
                    >
                        Carrinho está vazio
                    </p>
                ):(
                    <div className="flex justify-between items-center py-2 gap-2">
                        <button
                            data-testid="cart-btn-finalize-purchase"
                            className='w-full bg-[var(--color-brand-secondary)] rounded-lg py-2 px-4 text-white'
                            onClick={handleCheckOut}
                        >Finalizar Compra</button>
                        <button 
                            data-testid="cart-btn-continue-shopping"
                            className='w-full bg-[var(--color-brand-secondary)] rounded-lg py-2 px-4 text-white'
                            onClick={onClose}    
                        >Continuar Comprando</button>
                    </div>
                )}    

                <div data-testid="cart-total" className='text-2xl mt-6 font-bold text-right'>Total: R$ {total.toFixed(2)}</div>
            </aside>
        </div>

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