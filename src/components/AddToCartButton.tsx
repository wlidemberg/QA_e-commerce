
type Props = {
    onClick:() => void
    disabled?: boolean
}

export function AddToCartButton({onClick, disabled}:Props){
    return(
        <button
            data-testid="add-to-cart"
            type="button"
            disabled={disabled}
            onClick={onClick}
            className="bg-brand-primary text-white px-4 py-2 rounded"
        >Adicionar ao Carrinho</button>
    );
}