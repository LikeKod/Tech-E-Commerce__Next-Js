'use client'

import Product from "./product/Product"


export default function Products() {
    return (
        <>
            <div className="wrapper">
                <div className={"container"}>
                    <div className={"products__tags"}>
                        <ul>
                            <li>New Arrival</li>
                            <li>Bestseller</li>
                            <li>Featured Products</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-4">

                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />

                    </div>
                </div>
            </div>
        </>
    )
}
