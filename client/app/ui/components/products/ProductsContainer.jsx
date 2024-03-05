import ProductCart from "./ProductCart"
import { getProducts } from "../../../lib/data";
import { AppContext } from "../../../context/ShopingCartContext";

export default function ProductsContainer({products}) {

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {products?.map(product =>
                <ProductCart key={product.id} product={product} />
            )}
        </div>

    )
}
