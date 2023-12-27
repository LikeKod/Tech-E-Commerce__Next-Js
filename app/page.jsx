import Image from 'next/image'
import styles from './page.module.css'
import Header from "./ui/header/header"
import Footer from "./ui/footer/Footer"
import BasicButtons from './ui/components/Button.jsx'
import Banner from "./ui/banner/Banner"
import Banners from "./ui/smallerBanners/smallersBanners"

export default function Home() {
  return (
    <main >
      <Header />
      <Banner />
      <Banners />
      {/* <BasicButtons /> */}
      <Footer />
    </main>
  )
}