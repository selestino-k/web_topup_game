import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '../components/navbar';
import Games from '../components/games';
import Footer from '../components/footer';
import Image from 'next/image'
import mypic from '../asset/logo_masbro_store-removebg-preview.png'
import "bulma/css/bulma.css";
import { Carousel } from 'react-bootstrap';


function Home() {
  return <>
    <Head>
      <title>MASBRO.STORE</title>
    </Head>

    <Navigationbar />
    <section>
      <div >
            <Carousel interval={2500}>
            <Carousel.Item>
              <Image
                src="/masbrostore.png"
                width={2100}
                height={900}
                alt="Masbro Store"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
              src="/ffprice.png"
              width={2100}
              height={900}
              alt="FF Price List"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
              src="/mlbbprice.png"
              width={2100}
              height={900}
              alt="MLBB Pricelist"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
              src="/helpbanner.png"
              width={2100}
              height={900}
              alt="Help"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
  
    <Games></Games>
    <Footer></Footer>
  </>;
}

if (module.hot) {
  module.hot.accept();
}
export default Home;