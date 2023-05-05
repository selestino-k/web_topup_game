import Link from 'next/link';
import Head from 'next/head'
import Footer from '../components/footer';
import Navigationbar from '@/components/navbar';
import { Card,Button, Container } from 'react-bootstrap';

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
			      <h1 className="title">Games</h1>
			      <p className="description">
				  Berikut merupakan games yang didukung MASBRO.STORE
			      </p>
				  <Container className='card-container'>
				  <Card className='game-card' style={{ width: '18rem',marginTop:'10vmin' }}>
						<Card.Img variant="top" src="https://awsimages.detik.net.id/community/media/visual/2018/11/22/28a501b2-6ca7-42ed-a5c9-e0661a3a4e33_169.jpeg?w=700&q=90" />
						<Card.Body>
							<Card.Title>PUBG Mobile</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card`s content.
							</Card.Text>
							<Button variant="warning" href='/pubgm'>Top Up Sekarang</Button>
						</Card.Body>
					</Card>
					<Card className='game-card' style={{ width: '18rem',marginTop:'10vmin' }}>
						<Card.Img variant="top" src="https://cdn0-production-images-kly.akamaized.net/uEiyrGOm1eroBJznHT8VwB9CRxQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4058234/original/090110200_1655708618-Logo_Baru_Free_Fire.jpg" />
						<Card.Body>
							<Card.Title>Free Fire</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card`s content.
							</Card.Text>
							<Button variant="danger" href='/freefire'>Top Up Sekarang</Button>
						</Card.Body>
					</Card>
					<Card className='game-card' style={{ width: '18rem',marginTop:'10vmin' }}>
						<Card.Img variant="top" src="https://cdn.vcgamers.com/news/wp-content/uploads/2021/11/Mobile-Legends-Zodiac-Skin.jpg" />
						<Card.Body>
							<Card.Title  style={{fontSize:'2vmin'}}>Mobile Legends:Bang Bang</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card`s content.
							</Card.Text>
							<Button variant="primary" href='/mlbb'>Top Up Sekarang</Button>
						</Card.Body>
					</Card>
					<Card className='game-card' style={{ width: '18rem',marginTop:'10vmin' }}>
						<Card.Img variant="top" src="https://assets.skor.id/crop/0x0:0x0/x/photo/2021/05/05/1119307843.jpg" />
						<Card.Body>
							<Card.Title>Call Of Duty Mobile</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card`s content.
							</Card.Text>
							<Button variant="">Coming Soon</Button>
						</Card.Body>
					</Card>
					<Card className='game-card' style={{ width: '18rem',marginTop:'10vmin' }}>
						<Card.Img variant="top" src="https://gamedaim.com/wp-content/uploads/2021/07/Genshin-Impact-Key-Art-Small-1.jpg" />
						<Card.Body>
							<Card.Title>Genshin Impact</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card`s content.
							</Card.Text>
							<Button variant="">Coming Soon</Button>
						</Card.Body>
					</Card>
					</Container>

		      </div>
	      </div>
			</section>
			<Footer />

		</>
	);
}

export default Informasi;