'use client'

import MainLayout from "../layouts/MainLayout"
import { productsList } from "../lib/data"
import ProductsContainer from "../ui/components/products/ProductsContainer"

export default function Product() {
    return (
        <MainLayout>

            <div className="container">
                <div>
                    Home -- Catalog -- Smartphones
                </div>

                <div className="flex justify-between">
                    <div className="min-w-[256px]">
                        Filters
                    </div>

                    <div>
                        <div className="py-14">
                            <ProductsContainer products={productsList} />
                        </div>
                    </div>

                </div>


            </div>

        </MainLayout>
    )
}