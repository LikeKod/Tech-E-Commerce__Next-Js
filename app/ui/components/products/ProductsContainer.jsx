'use client'

import Product from "./product/Product"


export default function ProductsContainer({ products }) {
    return (
        <div className="flex flex-wrap gap-4">
            {products.map((product) =>
                <Product key={product.id} product={product} />
            )}
        </div>
    )
}
