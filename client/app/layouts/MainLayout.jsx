'use client'

import Footer from "./includes/footer/Footer"
import Header from "./includes/header/Header"
import { AppProvider } from '../context/ShopingCartContext'

import { Provider } from "react-redux"
import { store } from '../../redux/store'

export default function MainLayout({ children }) {
    return (
        <Provider store={store} >

            <AppProvider>
                <>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </>
            </AppProvider>

        </Provider>

    )
}