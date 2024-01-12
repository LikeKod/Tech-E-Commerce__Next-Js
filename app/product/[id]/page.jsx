import MainLayout from "../../layouts/MainLayout"
import SingleProduct from "../../ui/components/SingleProduct/SingleProduct"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"

import { getProducts } from '../../lib/data';
import { NextResponse } from "next/server"

import { wooApi } from "../../api/products/route"



export default async function Product({ params }) {
    const  data  = await getProducts();

    // Находим из массива продукт по праметру из пути
    const product = data?.products.find(item =>
        item.slug === params.id
    )

    const getVariations = async (productId) => {
        const responseData = {
            variants: []
        }
        // Fetch data from external API
        const res = await wooApi.get(`products/${productId}/variations`);
        responseData.variants = res.data;
        return responseData;
    }

    const { variants } = await getVariations(product.id)


    return (
        <MainLayout>

            <section className="breadcrumb py-10">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </section>

            <SingleProduct product = {product} variants = {variants} />


        </MainLayout>
    )
}