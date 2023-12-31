import Image from 'next/image'
import styles from './page.module.css'
import Header from "./ui/header/header"
import Footer from "./ui/footer/Footer"
import CardCategory from "./ui/card_category/CardCategory"
import BasicButtons from './ui/components/Button.jsx'
import Banner from "./ui/banner/Banner"
import Banners from "./ui/smallerBanners/smallersBanners"
import ProductsContainer from "./ui/components/products/ProductsContainer"
import { productsList, discontList, tagsList } from "./lib/data.js"
import TopFilters from "./ui/components/TagsFilter/TopFilters"
import Sale from "./ui/sale/sale"




export default function Home() {
    // console.log(productsList)
    return (
        <main >
            <Header />
            <Banner />
            <Banners />
            {/* <BasicButtons /> */}
            <div className="container py-14">
                <div className="products__tags mb-8">
                    <TopFilters filters={tagsList} />
                </div>
                <ProductsContainer products={productsList} />
            </div>

            <CardCategory />

            <div className="container py-14">
                <div className="products__tags mb-8">
                    <TopFilters filters={discontList} />
                </div>
                <ProductsContainer products={productsList} />
            </div>

            <Sale />

            <Footer />
        </main>
    )
}