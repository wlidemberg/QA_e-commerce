type Props = {
    open:boolean
    onClose: () => void
    onGoToCart: () => void
}

export function AddToCartModal({ open, onClose, onGoToCart }:Props){
    if(!open) return null;
    

    return(
        <div
            data-testid="add-to-cart-modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 shadow-lg"
        >
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
                <h2 className="text-lg font-semibold">Produto adicionado ao carrinho!</h2>
                <div className="mt-6 flex flex-col gap-3">
                    <button
                        data-testid="go-to-cart"
                        onClick={onGoToCart}
                        className="bg-[var(--color-brand-primary)] text-white py-2 rounded  -lg font-medium"
                    >
                        Ir para o carrinho
                    </button>

                    <button
                        data-testid='continue-shopping'
                        onClick={onClose}
                        className="border py-2 rounded-lg"
                    >
                        Continuar comprando
                    </button>
                </div>
            </div>
        </div>
    );
}