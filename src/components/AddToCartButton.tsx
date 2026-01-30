
type Props = {
    onClick:() => void
    disabled?: boolean
}

export function AddToCartButton({onClick, disabled}:Props){
    return(
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            data-testid="add-to-cart"
            className="bg-brand-primary text-white px-4 py-2 rounded"
        >Adicionar ao Carrinho</button>
    );
}