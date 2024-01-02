'use client'

import CardCategory from "./ui/card_category/CardCategory"
import Banner from "./ui/banner/Banner"
import Banners from "./ui/smallerBanners/smallersBanners"
import ProductsContainer from "./ui/components/products/ProductsContainer"
import { productsList, discontList, tagsList } from "./lib/data.js"
import TopFilters from "./ui/components/TagsFilter/TopFilters"
import Sale from "./ui/sale/sale"
import Slider from "./ui/Slider/Slider"
import MainLayout from "./layouts/MainLayout"
import { useState } from 'react'




export default function Home() {

    const [searchValue, setSearchValue] = useState('')


    return (
        <MainLayout searchValue={searchValue} setSearchValue={setSearchValue}>
            <Banner />
            <Banners />

            <Slider />

            <div className="container py-14">
                <div className="products__tags mb-8">
                    <TopFilters filters={tagsList} />
                </div>
                <ProductsContainer products={productsList} searchValue={searchValue} />
            </div>


            <CardCategory />

            <div className="container py-14">
                <div className="products__tags mb-8">
                    <TopFilters filters={discontList} />
                </div>
                <ProductsContainer products={productsList} />
            </div>

            <Sale />

        </MainLayout>

    )
}