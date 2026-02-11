import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filters } from '../components/Filters';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function Home() {
    const [filters, setFilters] = useState({
        brand: "",
        onlyAvialable: false,
        maxPrice: 1000
    });
    const brands = Array.from(new Set(products.map(product => product.brand)));
    const filteredProducts = products.filter(product => {
        if (filters.brand && product.brand !== filters.brand) {
            return false;
        }
        if (filters.onlyAvialable && !product.isAvailable) {
            return false;
        }
        if (product.price > filters.maxPrice) {
            return false;
        }
        return true;
    });
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsxs("main", { className: 'bg-[var(--color-background-main)] min-h-screen p-10', children: [_jsx("h1", { className: 'text-3xl font-bold mb-8', children: "T\u00EAnis em Destaque" }), _jsx(Filters, { filters: filters, onChange: setFilters, brands: brands }), _jsxs("section", { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8', children: [filteredProducts.map(product => (_jsx(ProductCard, { product: product }, product.id))), filteredProducts.length === 0 && (_jsx("p", { className: 'text-gray-500', children: "Nenhum produto encontrado" }))] })] }), _jsx(Footer, {})] }));
}
