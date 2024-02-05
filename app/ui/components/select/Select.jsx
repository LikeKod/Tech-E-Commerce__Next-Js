'use client'

import { getProducts } from "../../../lib/data";
import { useState } from "react";


export async function SelectedItems() {
    const  {data}  = await getProducts();
    const item = data.products

    const sortOptions = [
        { key: 'id', type: 'number' },
        { key: 'name', type: 'string' },
        { key: 'price', type: 'number' },
    ];
    const sortFunctions = {
        number: (a, b) => a - b,
        string: (a, b) => a.localeCompare(b),
    };
    const sortedItems = useMemo(() => {
        const { key, type } = sortOptions[sortIndex];
        const f = sortFunctions[type];
        return [...item].sort((a, b) => f(a[key], b[key]));
    }, [item, sortIndex, sortFunctions]);
    return sortedItems
}

export default function Select() {
    const [sortIndex, setSortIndex] = useState(0);
    const sortOptions = [
        { key: 'id', type: 'number' },
        { key: 'name', type: 'string' },
        { key: 'price', type: 'number' },
    ];

    const onSortChange = e => setSortIndex(+e.target.value);
    return (
        <div>
            sort by:
            <select className="w-[164px] h-[56px] rounded-lg px-[16px] bg-white border text-base sm:w-[256px] sm:h-[40px]" value={sortIndex} onChange={onSortChange}>
                {sortOptions.map((n, i) => <option value={i}>{n.key}</option>)}
            </select>
        </div>
    )
}