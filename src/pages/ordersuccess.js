import Link from 'next/link';
import Head from 'next/head'
import Footer from '../components/footer';
import Navigationbar from '@/components/navbar';

function OrderSuccess() {
	return (
		<>
		<Navigationbar></Navigationbar>
			<Head>
			  <title>Pesanan Berhasil</title>
			</Head>
			<section className="hero">
			  <div className="container mt-6 mb-6 mx-6">
					<div className="container">
						<h1 className="title is-1 is-spaced">Order Success</h1>
						<p className="subtitle is-4 is-spaced">
							Terima kasih telah memesan top up game di MASBRO.STORE
							
						</p>
						<h1 className="title is-5 is-spaced">Silahkan pilih metode pembayaran berikut : </h1>
						<div class="buttons">
							<button class="button is-danger">QRIS</button>
							<button class="button is-link">OVO</button>
							<button class="button is-info">DANA</button>
							<button class="button is-warning">Transfer Bank</button>
						</div>

					</div>
	      		</div>
			</section>
			<Footer />
		</>
	);
}

export default OrderSuccess;