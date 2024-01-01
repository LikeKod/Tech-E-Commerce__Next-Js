'use client'

import Footer from "./includes/footer/Footer"
import Header from "./includes/header/Header"

export default function MainLayout({children}) {
    return (
        <>
            <Header />

            {children}

            <Footer />
        </>

    )
}