import MainLayout from "../layouts/MainLayout"
import Arrow from '../../public/images/Icons/Arrow-24.svg'
import Image from "next/image"

import CatalogPage from '../ui/components/catalogPage/CatalogPage'
import { getProducts } from "../lib/data"


export default async function Catalog() {
    const params = {
        per_page: 30,
        page: 1,
        // max_price: 10
    }

    const { data } = await getProducts(params);
    const products = data?.products || [];

    // let nav = [
    //     { name: 'Home' },
    //     { name: 'Catalog' },
    //     { name: 'Smartphones' },
    // ]

    return (
        <MainLayout>

            <div className="container">
                <div className="hidden mt-[44px] text-neutral-400 gap-[16px] sm:flex">
                    {/* {nav.map(item => (

                        <p>{item.name}</p>
                    ))} */}
                    <Image alt="Icon" src={Arrow} />
                    <p>Catalog</p>
                    <Image alt="Icon" src={Arrow} />
                    <p className="text-black">Smartphones</p>
                </div>

                <CatalogPage products={products} />

            </div>

        </MainLayout>
    )
}