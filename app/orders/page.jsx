'use client'

import MainLayout from "../layouts/MainLayout"
import Payment from "./sum__pay/Payment"
import Shipping from "./sum__pay/Shipping"

export default function Product() {
    return (
        <MainLayout>
            <Payment />
        </MainLayout>
    )
}