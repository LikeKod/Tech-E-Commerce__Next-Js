import Image from 'next/image'
import styles from './page.module.css'
import Header from "./ui/header/header"
import Footer from "./ui/footer/Footer"
import CardCategory from "./ui/card_category/CardCategory"
import BasicButtons from './ui/components/Button.jsx'

export default function Home() {
  return (
    <main >
      <Header />
      {/* <BasicButtons /> */}
      <CardCategory />
      <Footer />
    </main>
  )
}
