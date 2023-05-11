import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image'
import mypic from '../asset/logo_masbro_store-removebg-preview.png'
import "bulma/css/bulma.css";






function Home() {
  return <>
    <Head>
      <title>MASBRO.STORE</title>
    </Head>

    <Navigationbar />

    <section className="hero">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">MASBRO.store</h1>
          <p className="description">Mau top up game? Di sini aja masbro!</p>

          <Link href="/games" className="cta">Top Up Sekarang</Link>
        </div>
        <div className='image-wrapper'>
        <Image
          src={mypic}
          alt="Masbro.store"
          width="350px"
          height="300px"
          layout="responsive" 
        />
        </div>

        
      </div>
    </section>
    <Footer />

  </>;
}

if (module.hot) {
  module.hot.accept();
}
export default Home;