import MainLayout from "../../layouts/MainLayout"
import SingleProduct from "../../ui/components/SingleProduct/SingleProduct"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"
import { getProducts, getSingleProduct } from "../../lib/data";

export default async function Product({ params }) {
    const result = await getSingleProduct(params.id);
    const product = result?.data.product || [];

    return (
        <MainLayout>
            <section className="breadcrumb py-10">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </section>
            <SingleProduct id={params.id} product={product} />
        </MainLayout>
    )
}