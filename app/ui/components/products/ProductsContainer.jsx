'use client'

import ProductCart from "./ProductCart"


export default function ProductsContainer({ products }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {products.length ? products.map(product =>
                <ProductCart key={product.id} product={product} />
            )
                : null
            }
        </div>

    )
}
