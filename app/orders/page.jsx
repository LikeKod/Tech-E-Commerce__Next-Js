import MainLayout from "../layouts/MainLayout"
import Payment from "./sum__pay/Payment"
import ShoppingCart from "../../app/ui/components/ShoppingCart"
import '../orders/sum__pay/ShoppingCart.css';

export default function Product() {

    return (
        <MainLayout>
            <div className={"wrapper"}>
                <ShoppingCart />
                <div className={`sum__pay `}>
                    {/* <Payment /> */}
                </div>
            </div>
        </MainLayout>
    )
}