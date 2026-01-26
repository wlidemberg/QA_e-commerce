import type { Filters } from '../types/filters'

type Props ={
    filters:Filters
    onChange: (filters:Filters) => void
    brands:string[]
}

export function Filters({ filters, onChange, brands }:Props){
    return(
        <aside className='bg-white p-6 rounded2xl shadow-sm space-y-6'>
            <div>
                <label className='block text-sm font-medium mb-2'>Marca</label>
                <select
                    data-testid="filter-brand"
                    value={filters.brand}
                    onChange={(e) =>
                        onChange({ ...filters, brand: e.target.value })
                    }
                    className='w-full border rounded-lg p-2'
                >
                    <option value="">Todas</option>
                    {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>                
            </div>

            {/* Disponibilidade */}
            <div className='flex items-center gap-2'>
                <input 
                    data-testid="filter-available"
                    type="checkbox" 
                    checked={filters.onlyAvialable}
                    onChange={(e) => onChange({...filters, onlyAvialable:e.target.checked})} 
                    
                />        
                <span className='text-sm'>Somente Disponíveis</span>
            </div>

            {/* Preço */}
            <div>
                <label className="block text-sm font-medium mb-2">Preço Máximo</label>
                <input 
                    data-testid="filter-price"
                    type="range"
                    min={0}
                    max={1000}
                    step={50}
                    value={filters.maxPrice}
                    onChange={(e) => onChange({...filters, maxPrice:Number(e.target.value)})}
                />
                <span className="text-sm text-gray-600 p-2">
                    Até R$ {filters.maxPrice}
                </span>
            </div>
        </aside>
    );
}