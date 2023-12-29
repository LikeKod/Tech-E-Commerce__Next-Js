'use client'

import Product from "./product/Product"

export default function Products () {
  return (
    <>
        <div className="products__wrapper">
            <div className="container">
                <div className="products__tags">
                    <ul>
                        <li>New Arrival</li>
                        <li>Bestseller</li>
                        <li>Featured Products</li>
                    </ul>
                </div>
                <div className="products__row">
                    
                        <Product/>
                    
                </div>
            </div>
        </div>
    </>
  )
}
