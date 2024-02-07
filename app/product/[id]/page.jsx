import MainLayout from "../../layouts/MainLayout"
import SingleProduct from "../../ui/components/SingleProduct/SingleProduct"
import Breadcrumbs from "../../ui/components/Breadcrumbs/Breadcrumbs"

export default async function Product({ params }) {

    return (
        <MainLayout>

            <section className="breadcrumb py-10">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </section>

            <SingleProduct id={params.id} />


        </MainLayout>
    )
}