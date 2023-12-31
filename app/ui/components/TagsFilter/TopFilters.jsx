'use client'

import { Button } from "@mui/material";

export default function TopFilters({filters}) {

    return (

        <ul className="flex gap-6 text-lg font-medium">
            {filters.map((filter) => 
                <li key={filter.id} className="">
                    <button className="text-black">
                    {filter.name}
                    </button>
                </li>
            )}
        </ul>

    );
}