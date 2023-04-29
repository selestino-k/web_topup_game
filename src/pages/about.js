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
			      <h1 className="title">About Us</h1>
			      <p className="description">
			      	Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor id pariatur nostrud labore nulla veniam sunt occaecat est officia ut cillum do eiusmod enim consequat nulla in ut esse irure ex commodo excepteur pariatur in consectetur consectetur in dolor aliqua ex sint minim dolore ut ea ad dolor est deserunt incididunt exercitation qui laboris ad do minim sunt elit occaecat excepteur deserunt sint sunt laboris dolore amet sit fugiat tempor reprehenderit laborum et irure commodo exercitation ea excepteur esse mollit ad nisi sit laboris dolore ad sunt eiusmod dolore do nisi id commodo in et aliqua sed ullamco ea id duis aliquip commodo qui sed aute ut aliqua.
			      </p>
		      </div>
	      </div>
			</section>
			<Footer />

		</>
	);
}

export default Informasi;