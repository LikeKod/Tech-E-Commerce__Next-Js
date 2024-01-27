
import MainLayout from "../layouts/MainLayout"
import Arrow from '../../public/images/Icons/Arrow-24.svg'
import Image from "next/image"

import { getProducts } from "../lib/data"
import CatalogPage from '../ui/components/catalogPage/CatalogPage'

// async function getData(){
//     const  data  = await getProducts();
//     console.log(data)
//     return data.products
// }
export default async function Catalog({ }) {
    const  data  = await getProducts();
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

                <CatalogPage items={data.products}/>

            </div>

        </MainLayout>
    )
}