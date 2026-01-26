import type { Product } from '../types/product';

type Props = {
    product:Product
}

export function ProductCard({ product }:Props){
    return(
        <div data-testid="product-card" className='rounded-2xl gb-white shadow-sm hover:shadow-md transition overflow-hidden'>
            <img 
                src={product.image}
                alt={product.name}
                className='h-56 w-full object-cover'    
            />

            <div className='p-4 space-y-2'>
                <span className='text-sm text-gray-500'>{product.brand}</span>
                <h2 data-testid="product-name" className='text-lg font-semibold'>{product.name}</h2>
                <p data-testid="product-price" className='text-[var(--color-brand-primary)] font-bold- text-xl'>
                    R$ {product.price.toFixed(2)}
                </p>
                {!product.isAvailable && (
                    <span data-testid="product-unavailable" className='inline-block text-sm text-red-600 font-medium'>
                        Indisponível
                    </span>
                )}
            </div>
        </div>
    );
}