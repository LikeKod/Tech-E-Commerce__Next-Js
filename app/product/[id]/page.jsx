'use client'

import MainLayout from "../../layouts/MainLayout"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"

export default function Product() {
    return (
        <MainLayout>

            <div className="porduct">

                <div className="breadcrumb-section py-10">
                    <div className="container">
                        <Breadcrumbs/>
                    </div>
                </div>

            </div>

            <h1>Product</h1>

        </MainLayout>
    )
}