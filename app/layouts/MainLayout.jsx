'use client'

import Footer from "./includes/footer/Footer"
import Header from "./includes/header/Header"
import {AppProvider} from '../context/ShopingCartContext' 

export default function MainLayout({ children }) {
    return (
        <AppProvider>
            <>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </>
        </AppProvider>
    )
}