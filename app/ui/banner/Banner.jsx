import Image from 'next/image'
import Iphone from '/public/images/banner/iphone.png';
import './Banner.css'

export default function Banner() {
  return (
    <div className={'banner'}>
      <div className={'wrapper'}>
        <div className={'banner__inner'}>
          <div className={'info'}>
            <span>Pro.Beyond</span>
            <>
              <h1 className={'tittle'}>IPhone 14 Pro</h1>
              <p className={"description"}>Created to change everything for the better. For everyone</p>
            </>
            <>
              <a href="#" className={"btn"}>Shop Now</a>
            </>
          </div>
          <div className={'iphone'}>
            <Image
              priority
              src={Iphone}
              alt={'iphone'} />
          </div>
        </div>
      </div>
    </div>
  )
}