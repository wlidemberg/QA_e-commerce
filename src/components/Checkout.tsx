import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

type PaymentMethod = "pix" | "card" | "boleto";

export function Checkout(){
    const { items, total, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [payment, setPayment] = useState<PaymentMethod>("pix");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Se não logado vai para login
        if(!user){
            navigate("/login?redirect=/checkout", { replace: true });
            return
        }

        // carrinho vazio → home
        if(items.length === 0){
            navigate("/", { replace:true })
        }

    }, [user, items.length, navigate])

    function handleConfirm(){
        //clearCart();
        setSuccess(true);

    }

   
    if (!user) return null;
    if(!success && items.length === 0) return null;

    if(success){
        return(
            <div
                data-testid="checkout-success"
                className="min-h-screen flex items-center justify-center"
            >
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-4">
                    <h2 className="text-2xl font-bold">Pedido Confirmado</h2>
                    <p>Obrigado {user.name}. Seu pagamento via {payment.toUpperCase()} foi simulado com sucesso!</p>
                    <button
                        data-test-id="back-to-home"
                        onClick={clearCart}
                        className="mt-4 bg-[var(--color-brand-primary)] text-white px-4 py-2 rounded-lg"
                    >Voltar para a loja</button>
                </div>
            </div>
        );
    }
    return(
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
            <h1 className="text-3xl font-bold">Finalizar Compra</h1>
            {/* Usuário */}
            <section className="bg-white rounded-lg p-6 shadow-sm space-y-1">
                <p className="text-sm text-gray-500">Cliente</p>
                <p
                    data-testid="checkout-user"
                    className="font-medium"
                >{user.name} {user.email}</p>
            </section>

            {/* Itens */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold mb-4">Resumo do Pedido</h2>
                <ul className="space-y-2">
                    {items.map(item => (
                        <li
                            key={item.product.id}
                            data-testid="checkout-item"
                            className="flex justify-between text-sm"
                        >
                            <span>{item.product.name} ({item.quantity})</span>
                            <span>R$ {(item.product.price * item.quantity).toFixed(2)}</span>    
                        </li>
                    ))}
                </ul>
                <div
                    data-testid="checkout-total"
                    className="text-right font-bold mt-4"
                >
                    Total: R$ {total.toFixed(2)}
                </div>
            </section>

            {/* Pagamento */}
            <section
                data-testid="payment-method"    
                className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <h2 className="font-semibold">Forma de Pagamento</h2>
                <label className="flex items-center gap-2">
                    <input 
                        data-testid='payment-pix'
                        type="radio"
                        name="payment"
                        checked={payment === "pix"}
                        onChange={() => setPayment("pix")}
                    />
                    Pix
                </label>

                <label className="flex items-center gap-2">
                    <input 
                        data-testid="payment-card"
                        type="radio"
                        name="payment"
                        checked={payment === "card"}
                        onChange={() => setPayment("card")}
                    /> Cartão
                </label>

                <label className="flex items-center gap-2">
                    <input 
                        data-testid="payment-boleto"
                        type="radio"
                        name="payment"
                        checked={payment === "boleto"}
                        onChange={() => setPayment("boleto")}
                    /> Boleto
                </label>
            </section>

            {/* Confirmar */}
            <div className="flex justify-end">
                <button
                    data-testid="confirm-order"
                    onClick={handleConfirm}
                    className="bg-[var(--color-brand-primary)] text-white px-6 py-3 rounded-lg"
                >Confirmar Pedido</button>
            </div>
        </div>
    );
}