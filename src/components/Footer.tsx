
export function Footer(){
    return(
        <footer className="bg-gray-100 mt-20">
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">QA Store</h3>
                    <p>E-commerce premium de tenis urbanos e esportivos</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Institucional</h3>
                    <ul className="space-y-1">
                        <li>Sobre Nós</li>
                        <li>Política de Privacidade</li>
                        <li>Termos de uso</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Atendimento</h3>
                    <ul className="space-y-1">
                        <li>Contato</li>
                        <li>Trocas e devoluções</li>
                        <li>Suporte</li>
                    </ul>
                </div>
            </div>
            <div>
                © {new Date().getFullYear()} QAStore. Todos os direitos reservados.
            </div>
        </footer>
    );
}