
export function Header(){
    return(
        <header data-testid="header" className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <div data-testid="logo" className="text-2xl font-bold tracking-tight text-[var(--color-brand-primary)]">
                    QA <span className="text-black">Store</span>
                </div>

                {/* Navegação */}
                <nav className="flex gap-8 text-sm font-medium text-gray-700">
                    <a href="" className="hover:text-[var(--color-brand-primary)] trasition">
                        Home
                    </a>                    
                    <a href="" className="hover:text-[var(--color-brand-primary)] transition">
                        Tênis
                    </a>                    
                    <a href="" className="hover:text-[var(--color-brand-primary)] transition">
                        Coleções
                    </a>                    
                    <a href="" className="hover:text-[var(--color-brand-primary)] transition">
                        Contato
                    </a>                                     
                </nav>
            </div>
        </header>
    )
}