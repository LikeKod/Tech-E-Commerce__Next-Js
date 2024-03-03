import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {getProducts} from "../../../shared/lib/utils/data";
import CatalogPage from "../../../widgets/catalogPage/CatalogPage";
import Breadcrumbs from "../../../widgets/Breadcrumbs/Breadcrumbs";

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
                    <Breadcrumbs/>
                </div>
                <CatalogPage  products={products}/>
            </div>
        </>
    )
}