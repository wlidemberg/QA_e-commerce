import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'
import { AddToCartModal } from './AddToCartModal';
import type { Product } from '../types/product';
import { AddToCartButton } from './AddToCartButton';
import { ProductDetailsModal } from './ProductDetailsModal';
//import { useCart } from '../context/CartContext';


type Props = {
    product:Product
}

export function ProductCard({ product }:Props){
    const { addToCart } = useCart();
    const [ showModal, setShowModal ] = useState(false);
    const navigate = useNavigate()    


    const [selectProduct, setSelecetProduct] = useState<Product | null>(null);
    const [openDetails, setOpenDetails] = useState(false);

    

    function handleAddToCart(){
        if(!product.isAvailable) return
        addToCart(product)
        setShowModal(true)
        
    }

    function handleGoToCart(){
        setShowModal(false);
        navigate("/?openCart=true")
    }
    
    return(
        <div data-testid="product-card" className='rounded-2xl bg-white border border-gray-500/30 shadow-md hover:shadow-md transition overflow-hidden mb-4'>
            <img 
                src={product.image}
                alt={product.name}
                className='h-56 w-full object-cover'    
            />

            <div className='flex flex-col gap-4s p-4 space-y-2'>
                <span className='text-sm text-gray-500'>{product.brand}</span>
                <h2 data-testid="product-name" className='text-lg font-semibold'>{product.name}</h2>
                <p data-testid="product-price" className='text-[var(--color-brand-primary)] font-bold- text-xl'>
                    R$ {product.price.toFixed(2)}
                </p>
                {product.isAvailable ? (
                    <div>
                        <div className='text-center my-8 mb-4'>
                            <AddToCartButton onClick={handleAddToCart} disabled={!product.isAvailable}/>
                        </div>
                        <div className='text-center mb-4'>
                            <button
                                data-testid="open-product-details"
                                onClick={() => { setSelecetProduct(product); setOpenDetails(true) }}
                            >Ver Detalhes</button>
                        </div>
                    </div>
                    // <button
                    //     onClick={handleAddToCart}
                    //    className='mt-4 bg-brand-primary text-white px-4 py-2 rounded'
                    // >Adicionar ao carrinho</button>
                ):(
                    <span data-testid="product-unavailable" className='inline-block text-sm text-red-600 font-medium'>
                        Indisponível
                    </span>
                )}
            </div>
            <ProductDetailsModal
                open={openDetails}
                product={selectProduct}
                onClose={() => setOpenDetails(false)}
                onAddSuccess={() => {
                    setOpenDetails(false);
                    setShowModal(true);    
                }}
            />    

            <AddToCartModal
                open={showModal}
                onClose={() => setShowModal(false)}
                onGoToCart={handleGoToCart}
            />
        </div>
    );
}