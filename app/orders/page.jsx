import MainLayout from "../layouts/MainLayout"
import Payment from "./sum__pay/Payment"
import ShoppingCart from "../../app/ui/components/ShoppingCart"

import '../orders/sum__pay/ShoppingCart.css';
import { getProducts } from "../lib/data";

export default async function Product() {
    const params = {
        per_page: 100
    }
    const { data } = await getProducts(params);
    const orders = data?.products || [];

    return (
        <MainLayout>
            <div className={"wrapper"}>
                <ShoppingCart orders={orders} />
                <div className={`sum__pay `}>
                    {/* <Payment /> */}
                </div>
            </div>
        </MainLayout>
    )
}