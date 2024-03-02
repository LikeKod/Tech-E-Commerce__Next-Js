import CardCategory from "../widgets/card_category/CardCategory"
import Banner from "../widgets/banner/Banner"
import Banners from "../widgets/smallerBanners/smallersBanners"
import ProductsContainer from "../widgets/products/ProductsContainer"
import { getProducts, getProductTags, discontList, productParams, tagsParams } from "../shared/lib/utils/data.js"
import TopFilters from "../widgets/TagsFilter/TopFilters"
import Sale from "../widgets/sale/sale"
import Slider from "../widgets/Slider/Slider"
import {AppProvider} from "../shared/context/ShopingCartContext";


export default async function Home() {
    const { products } = await getProducts(productParams);
    const { tagsList } = await getProductTags(tagsParams);
    // const products = data?.products || [];

    return (
        <AppProvider>
            <h1> Home </h1>
            <Banner />
            {/*<Banners />*/}
            {/*<Slider />*/}
            <div className="container py-14">
                <div className="products__tags mb-8">
                    {/*<TopFilters filters={tagsList} />*/}
                </div>
                <ProductsContainer products={products} />
            </div>
            <CardCategory />
            <div className="container py-14">
                <div className="products__tags mb-8">
                    {/*<TopFilters filters={discontList} />*/}
                </div>
                {/*<ProductsContainer products={products} />*/}
            </div>
            {/*<Sale />*/}
        </AppProvider>
    )
}