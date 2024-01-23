
import MainLayout from "../layouts/MainLayout"
import PaginatedItems from "../ui/components/pagination/Pagination"
import Filter from '../ui/components/filter/Filter'
import Arrow from '../../public/images/Icons/Arrow-24.svg'
import ArrowLeft from '../../public/images/Icons/Arrow_left-32.svg'
import Image from "next/image"
import Filters from '../../public/images/Icons/Filters-24.svg'
import  Select  from "../ui/components/select/Select"
import { getProducts } from "../lib/data"
import SortedProduct from '../ui/components/sortedProduct/SortedProduct'
import CatalogPage from '../ui/components/catalogPage/CatalogPage'

// async function getData(){
//     const  data  = await getProducts();
//     console.log(data)
//     return data.products
// }
export default async function Catalog({ }) {
    const  data  = await getProducts();
    console.log('Catalog page',data);
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