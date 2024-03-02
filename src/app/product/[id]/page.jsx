import SingleProduct from "../../../widgets/SingleProduct/SingleProduct"
import Breadcrumbs from "../../../widgets/Breadcrumbs/Breadcrumbs"
import { getProducts, getSingleProduct } from "../../../shared/lib/utils/data";

export default async function Product({ params }) {
    const result = await getSingleProduct(params.id);
    const product = result?.data.product || [];

    return (
        <>
            <section className="breadcrumb py-10">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </section>
            <SingleProduct id={params.id} product={product} />
        </>
    )
}