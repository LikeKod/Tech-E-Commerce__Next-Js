'use client'
import { useState, useMemo } from "react";

export default function Select({ items, sortOptions, sortFunctions }) {
    const [ sortIndex, setSortIndex ] = useState(0);
  
    const sortedItems = useMemo(() => {
      const { key, type } = sortOptions[sortIndex];
      const f = sortFunctions[type];
      return [...items].sort((a, b) => f(a[key], b[key]));
    }, [ items, sortIndex, sortFunctions ]);
  
    const onSortChange = e => setSortIndex(+e.target.value);
  
    return (
      <div>
        <div>
          sort by:
          <select className="w-[164px] h-[56px] rounded-lg px-[16px] bg-white border text-base sm:w-[256px] sm:h-[40px]" value={sortIndex} onChange={onSortChange}>
            {sortOptions.map((n, i) => <option value={i}>{n.key}</option>)}
          </select>
        </div>
        <ul>
          {sortedItems.map(n => (
            <li>{JSON.stringify(n)}</li>
          ))}
        </ul>
      </div>
    );
  }