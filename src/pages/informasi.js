import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '../components/navbar';
import Footer from '../components/footer';

import Accordion from 'react-bootstrap/Accordion';


function Informasi() {
	return (
		<>
			<Head>
			  <title>Informasi</title>
			</Head>

			<Navigationbar/>

			<section>
			  <div className="container mt-6 mb-6 is-centered">
			    <div className="text-wrapper w-full">
			      <h1 className="title is-2 ml-3">FAQ</h1>
			      <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Apa itu MASBRO.STORE?</Accordion.Header>
                        <Accordion.Body>
                        MASBRO.STORE adalah jasa penyedia layanan top up game yang terjangkau bagi semua kalangan gamers di Indonesia.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Gimana sih caranya top up di MASBRO.STORE?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Prosesnya paling lama berapa menit ya?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

		      </div>
	      </div>
			</section>
            <Footer />
		</>
	);
}

export default Informasi;