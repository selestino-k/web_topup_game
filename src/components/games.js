
import { Card,Button, Col } from 'react-bootstrap';
import "bulma/css/bulma.css";


function Games() {
	return (
		<>
			<section>
			  <div className="container is fluid mt-6 is-centered mx-6 mb-6">
			      <h1 className='title is-3'>Games</h1>
			      <p className='mb-5'>
				  Berikut merupakan games yang didukung MASBRO.STORE
			      </p>
				  <div className='container is-fluid'>
				  <div className='columns is-vcentered is-desktop is-2 '>
				  	<div className='column'>
						<Card className='game-card' style={{ width: '15rem' }}>
							<Card.Img variant="top" src="https://awsimages.detik.net.id/community/media/visual/2018/11/22/28a501b2-6ca7-42ed-a5c9-e0661a3a4e33_169.jpeg?w=700&q=90" />
							<Card.Body>
								<Card.Title>PUBG Mobile</Card.Title>
								<Button variant="warning" href='/pubgm'>Top Up Sekarang</Button>
							</Card.Body>
						</Card>
					</div>
					<div className='column'>
						<Card className='game-card' style={{ width: '15rem' }}>
							<Card.Img variant="top" src="https://cdn0-production-images-kly.akamaized.net/uEiyrGOm1eroBJznHT8VwB9CRxQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4058234/original/090110200_1655708618-Logo_Baru_Free_Fire.jpg" />
							<Card.Body>
								<Card.Title>Free Fire</Card.Title>
								<Button variant="danger" href='/freefire'>Top Up Sekarang</Button>
							</Card.Body>
						</Card>
					</div>
					<div className='column'>
						<Card className='game-card' style={{ width: '16rem'}}>
							<Card.Img variant="top" src="https://cdn.vcgamers.com/news/wp-content/uploads/2021/11/Mobile-Legends-Zodiac-Skin.jpg" />
							<Card.Body>
								<Card.Title  style={{fontSize:'2.3vmin'}}>Mobile Legends:Bang Bang</Card.Title>
								<Button variant="primary" href='/mlbb'>Top Up Sekarang</Button>
							</Card.Body>
						</Card>
					</div>
					<div className='column'>
						<Card className='game-card' style={{ width: '15rem'}}>
							<Card.Img variant="top" src="https://assets.skor.id/crop/0x0:0x0/x/photo/2021/05/05/1119307843.jpg" />
							<Card.Body>
								<Card.Title>Call Of Duty Mobile</Card.Title>
								<Button variant="">Coming Soon</Button>
							</Card.Body>
						</Card>
					</div>
					<div className='column'>
						<Card className='game-card' style={{ width: '15rem' }}>
							<Card.Img variant="top" src="https://gamedaim.com/wp-content/uploads/2021/07/Genshin-Impact-Key-Art-Small-1.jpg" />
							<Card.Body>
								<Card.Title>Genshin Impact</Card.Title>
								<Button variant="">Coming Soon</Button>
							</Card.Body>
						</Card>
					</div>
				</div>
				</div>
			</div>
		</section>
		</>
	);
}

export default Games;