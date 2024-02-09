'use client'

import MainLayout from "../layouts/MainLayout"
import Arrow from '../../public/images/Icons/Arrow-24.svg'
import Image from "next/image"


import CatalogPage from '../ui/components/catalogPage/CatalogPage'
import { useContext } from "react"
import { AppContext } from "../context/ShopingCartContext"


export default function Catalog() {
    // const {filteredData} = useContext(AppContext)
    

    return (
        <MainLayout>

            <div className="container">
                <div className="hidden mt-[44px] text-neutral-400 gap-[16px] sm:flex">
                    <p>Home</p>
                    <Image src={Arrow} />
                    <p>Catalog</p>
                    <Image src={Arrow} />
                    <p className="text-black">Smartphones</p>
                </div>

                <CatalogPage />

            </div>

        </MainLayout>
    )
}