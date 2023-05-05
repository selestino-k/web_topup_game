import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '@/components/navbar';
import { Card,Button, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from '../components/games.module.css'
import handleChange from '../components/input';
import axios from 'axios'





function Informasi() {
	const [games, setGames] = useState([]);

	const [checked, setChecked] = useState(false);
  	const [radioValue, setRadioValue] = useState('0');
	
	

	useEffect(() => {
        getGames();
    }, []);

	const getGames = async () => {
        const response = await axios.get("http://localhost:5000/gamepubgm");
		setGames(response.data);
		
    }
	console.log(games);
	

	return (
		<>
		<Navigationbar></Navigationbar>
			<Head>
			  <title>About</title>
			</Head>
			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">PUBG Mobile</h1>
			      <p className="description">
				 
			      </p>
				  
				  <div>
					<p className="description">
									Masukkan ID PUBGM anda
								</p>
					<input className={styles.ID} type="text" onChange={handleChange}></input>

					</div>

						<p className="description">
									Pilih Jumlah UC yang akan ditop-up
						</p>
						<div className={styles.buttoncont} >
						{games.map((games, idx) => (
						
							<ToggleButton
								className={styles.selecttopup}
								key={idx}
								id={`radio-${idx}`}
								type="radio"
								variant={'outline-warning'}
								name="radio"
								value={games.Price}
								checked={radioValue === games.Price}
								onChange={(e) => setRadioValue(e.currentTarget.value)}

							>
								<div className='buttonlabel'><span>
								{games.Amount}<br></br>
								{games.Price}
								</span> 
								</div>  
							</ToggleButton>

						))}
						</div>
					</div>
			 		 <div className='container'>
							
							<Card className={styles.totalharga}>
								<Card.Body>
								<Card.Text>
									Total harga yang harus dibayar
									</Card.Text>
									<Card.Title>{radioValue}</Card.Title>
									<br></br>
											
									<Button variant="primary">Beli</Button>
								</Card.Body>
							</Card>

					</div>
	      </div>
		  <br></br>
			</section>

		</>
	);
}

export default Informasi;