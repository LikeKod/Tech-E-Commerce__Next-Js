import Image from 'next/image'
import styles from './page.module.css'
import Header from "./ui/header/header"
import Footer from "./ui/footer/Footer"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Footer />
    </main>
  )
}
