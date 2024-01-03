'use client'

import MainLayout from "../../layouts/MainLayout"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"

export default function Product() {
    return (
        <MainLayout>

            <div className="porduct">

                <section className="breadcrumb py-10">
                    <div className="container">
                        <Breadcrumbs />
                    </div>
                </section>

                <section className="product__info py-28">
                    <div className="container">
                        <div className="flex flex-row h-[672px]">

                                <div className="flex gap-x-12 my-auto">
                                    <ul className="flex flex-col gap-y-6 overflow-auto h-full w-20">
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                        <li>
                                            <img src="../images/products/Iphone14pro-1.png" alt="" />
                                        </li>
                                    </ul>
                                    
                                    <div className="max-w-[413px]">
                                        <img className="w-full" src="../images/products/Iphone14pro-1.png" alt="product-photo" />
                                    </div>
                                </div>

                            <div className="">

                            </div>
                        </div>

                        <h1>Product</h1>

                    </div>
                </section>

            </div>


        </MainLayout>
    )
}