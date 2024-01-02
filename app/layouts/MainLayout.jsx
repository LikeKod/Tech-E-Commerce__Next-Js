'use client'

import Footer from "./includes/footer/Footer"
import Header from "./includes/header/Header"

export default function MainLayout({searchValue, setSearchValue,  children}) {
    return (
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>

            {children}

            <Footer />
        </>

    )
}