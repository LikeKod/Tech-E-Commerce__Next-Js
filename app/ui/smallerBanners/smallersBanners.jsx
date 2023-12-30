import Image from 'next/image'
import ps from '/public/images/smallersBanners/ps.jpg';
import airpods from '/public/images/smallersBanners/airpods.png';
import mac from '/public/images/smallersBanners/macbook.png';
import macbook from '/public/images/smallersBanners/macBookAir.png';
import vis from '/public/images/smallersBanners/vision.png';
import promax from '/public/images/smallersBanners/airpodspromax.png';
import "./smallersBanners.css"


export default function smallersBanners() {
  return (
    <div className={'small__banners'}>
      <div className={'small'}>
        <div className='banner__ps equipment'>
          <Image
            src={ps}
            alt="ps" />
          <div className={'info__banner'}>
            <h1 className={"title"} id='ps'>
              Playstation 5
            </h1>
            <p className={"small-description"}>
              Incredibly powerful CPUs, GPUs, and an SSD with <br />
              integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className={'ultra__small'}>
          <div className={'Banner__air equipment'}>
            <Image
              src={airpods}
              alt="airpods" />
            <div className={'info__banner'}>
              <h1 className={"title"}>
                Apple <br />
                AirPods Max
              </h1>
              <p className={"small-description"}>
                Computational audio. <br />
                Listen, it's powerful
              </p>
            </div>
          </div>
          <div className={'banner__vision equipment'}>
            <Image
              src={vis}
              alt="vis" />
            <div className={'info__banner'}>
              <h1 className={"title"}>
                Apple <br />
                Vision Pro
              </h1>
              <p className={"small-description"}>
                An immersive way to <br />
                experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={'banner__mac '}>
        <div className={'info__mac'}>
          <h1 className={"title"}>Macbook Air</h1>
          <p className={"description"}>The new 15‑inch MacBook Air makes room for more of what <br />
            you love with a spacious Liquid Retina display.</p>
          <a href="#" className={"btn-black"} id={"black"}>Shop Now</a>
        </div>
        <Image
          src={mac}
          alt="macbook" />
      </div>
    </div>
  )
}