import CardCategory from "./ui/card_category/CardCategory"
import Banner from "./ui/banner/Banner"
import Banners from "./ui/smallerBanners/smallersBanners"
import ProductsContainer from "./ui/components/products/ProductsContainer"
import { getProducts, getProductTags, discontList, productParams, tagsParams } from "./lib/data.js"
import TopFilters from "./ui/components/TagsFilter/TopFilters"
import Sale from "./ui/sale/sale"
import Slider from "./ui/Slider/Slider"
import MainLayout from "./layouts/MainLayout"

export default async function Home() {
    const { data } = await getProducts(productParams);
    const { tagsList } = await getProductTags(tagsParams);
    const products = data?.products || [];

    return (
        <MainLayout>
            <Banner />
            <Banners />
            <Slider />
            <div className="container py-14">
                <div className="products__tags mb-8">
                    <TopFilters filters={tagsList} />
                </div>
                <ProductsContainer products={products} />
            </div>
            <CardCategory />
            <div className="container py-14">
                <div className="products__tags mb-8">
                    <TopFilters filters={discontList} />
                </div>
                <ProductsContainer products={products} />
            </div>
            <Sale />
        </MainLayout>
    )
}