import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

type Props = {
    product: Product | null;
    open: boolean;
    onClose: () => void;
    onAddSuccess: () => void;
}

export function ProductDetailsModal({ product, open, onClose, onAddSuccess }:Props){
    const { addToCart } = useCart();

    if(!open || !product) return null;

    function handleAdd(){
        if (!product) return;
        addToCart(product);
        onAddSuccess();
    }

    return(
        <div
            data-testid="product-details-modal"
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60"
        >
            <div className="w-full max-w-4xl bg-white rounded-2xl p-8 shadow-xl grid grid-cols-2 gap-8">
                {/* Galeria */}
                <div className="grid grid-cols-2 gap-3">
                    {[0, 1, 2, 3].map(i => (
                        <img src={product.image} alt={product.image} key={i} className="w-full h-40 object-cover rounded-lg border"/>
                    ))}
                </div>

                {/* Detalhes */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <p className="text-gray-500">{product.brand}</p>
                    <p className="text-3xl font-bold text-[var(--color-brand-primary)]">R$ {product.price.toFixed(2)}</p>
                    <div className="flex gap-2 flex-wrap">
                        {product.sizes.map(size => (
                            <span
                                key={size}
                                className="border rounded-md px-3 py-1 text-sm"
                            >{size}</span>
                        ))}
                    </div>
                    <p className="text-sm text=gray-600">Tênis premium para uso urbano e esportivo</p>
                    <div className="mt-auto flex gap-3">
                        <button
                            data-testid="details-add-to-cart"
                            disabled={!product.isAvailable}
                            onClick={handleAdd}
                            className="flex-1 bg-[var(--color-brand-primary)] text-white rounded-lg py-2 disabled:opacity-50"
                        >Adicionar ao Carrinho</button>

                        <button
                            data-testid="details-close"
                            onClick={onClose}
                            className="flex-1 border rounded-lg py-2"
                        >Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}