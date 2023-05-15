import Link from 'next/link';
import Head from 'next/head'
import Footer from '../components/footer';
import Navigationbar from '@/components/navbar';

function Informasi() {
	return (
		<>
		<Navigationbar></Navigationbar>
			<Head>
			  <title>Checkout</title>
			</Head>
			<section className="hero">
			  <div className="container mt-6 mb-6 mx-6">
					<div className="container">
						<h1 className="title is-1 is-spaced">Checkout</h1>
						<p className="subtitle is-4">
							insert Checkout page here walah walah
						</p>
					</div>
	      		</div>
			</section>
			<Footer />
		</>
	);
}

export default Informasi;