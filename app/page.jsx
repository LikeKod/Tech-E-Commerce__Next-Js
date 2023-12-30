import Image from 'next/image'
import styles from './page.module.css'
import Header from "./ui/header/header"
import Footer from "./ui/footer/Footer"
import CardCategory from "./ui/card_category/CardCategory"
import BasicButtons from './ui/components/Button.jsx'
import Banner from "./ui/banner/Banner"
import Banners from "./ui/smallerBanners/smallersBanners"
import ProductsContainer from "./ui/components/products/ProductsContainer"
import {productsList} from "./lib/data.js"
import TagsFilter from "./ui/components/TagsFilter/TagsFilter"



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
        <TagsFilter />
      </div>
        <ProductsContainer products = {productsList} />
      </div>

      <CardCategory />
      <Footer />
    </main>
  )
}