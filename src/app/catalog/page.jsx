import Arrow from '../../../public/images/Icons/Arrow-24.svg'
import Image from "next/image"

import CatalogPage from '../../widgets/catalogPage/CatalogPage'
import { getProducts } from "../../shared/lib/utils/data"


export default async function Catalog() {
    const params = {
        per_page: 30,
        page: 1,
        // max_price: 10
    }

    const { products } = await getProducts(params);
    // const products = data?.products || [];

    return (
        <>
            <div className="container">
                <div className="hidden mt-[44px] text-neutral-400 gap-[16px] sm:flex">
                    <p>Home</p>
                    <Image alt="Icon" src={Arrow} />
                    <p>Catalog</p>
                    <Image alt="Icon" src={Arrow} />
                    <p className="text-black">Smartphones</p>
                </div>
                <CatalogPage  products={products}/>
            </div>
        </>
    )
}