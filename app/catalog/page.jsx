'use client'

import MainLayout from "../layouts/MainLayout"
import { productsList } from "../lib/data"
import Pagination from "../ui/components/pagination/Pagination"
import Product from "../ui/components/products/product/Product"

export default function Catalog({ }) {
    const item = productsList.map((product) =>
        <Product key={product.id} product={product} />
    )

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
                            <div className="flex flex-wrap gap-4">
                                {item}
                            </div>
                        </div>
                    </div>

                </div>

                <Pagination />

            </div>

        </MainLayout>
    )
}