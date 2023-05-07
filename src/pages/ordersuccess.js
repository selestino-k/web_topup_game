import Link from 'next/link';
import Head from 'next/head'
import Footer from '../components/footer';
import Navigationbar from '@/components/navbar';

function Informasi() {
	return (
		<>
		<Navigationbar></Navigationbar>
			<Head>
			  <title>About</title>
			</Head>
			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Order Success</h1>
			      <p className="description">
			      	Terima kasih telah memesan top up game di MASBRO.STORE
			      </p>
		      </div>
	      </div>
			</section>
			<Footer />

		</>
	);
}

export default Informasi;