import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filters } from '../components/Filters';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer'; 
import type{ Filters as FiltersType } from '../types/filters';

export function Home() {
    const [filters, setFilters] = useState<FiltersType>({
        brand:"",
        onlyAvialable:false,
        maxPrice:1000
    })

    

    const brands = Array.from(
        new Set(products.map(product => product.brand))
    )

    const filteredProducts = products.filter(product => {
        if(filters.brand && product.brand !== filters.brand){
            return false;
        }

        if(filters.onlyAvialable && !product.isAvailable){
            return false;
        }

        if(product.price > filters.maxPrice){
            return false;
        }

        return true;
    });
    return(
        <div>
            <Header />
            <main className='min-h-screen p-10'>
                
                <h1 className='text-3xl text-center font-bold mb-8'>Tênis em Destaque</h1>
            
                {/* Filtros */}
                <Filters 
                    filters={filters}
                    onChange={setFilters}
                    brands={brands}
                />
                
                
                {/* Produtos */}
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    {filteredProducts.length === 0 && (
                        <p className='text-gray-500'>Nenhum produto encontrado</p>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}