import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import {useRouter } from "next/router";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Card } from 'react-bootstrap';
import styles from '../components/games.module.css'
import axios from 'axios'
import "bulma/css/bulma.css";

const PUBGM = ()=> {
	const [games, setGames] = useState([]);
	const [Email, setEmail] = useState('');
	const [GameID,setGameID] = useState('');
	const [selectedAmount, setselectedAmount] = useState(null);

	const router = useRouter()

	useEffect(() => {
        getGames();
    }, []);

	const getGames = async () => {
        const response = await axios.get("https://rich-teal-turkey-veil.cyclic.app/gamepubgm");
		setGames(response.data);
    }
	
	const saveUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("https://rich-teal-turkey-veil.cyclic.app/userorder",{
                Email,
				GameID,
                Amount : selectedAmount,
				Game : "PUBGM"
            });
            router.push("/ordersuccess");
        } catch (error){
            console.log(error);
        }
    }

	function handleSubmit() {
        console.log("Selected value:", selectedAmount);
      }

	return (
		<>
		<Navigationbar></Navigationbar>
			<Head>
			  <title>PUBGM Top Up - MASBRO.STORE</title>
			</Head>
			<section>
			<div className='container mt-6'>
			  	<div className="columns is-centered ">
						<div className="column is-4">
						<h1 className="title is-3">PUBG Mobile</h1>
							<figure className='image is-5by3'>
								<img src="https://awsimages.detik.net.id/community/media/visual/2018/11/22/28a501b2-6ca7-42ed-a5c9-e0661a3a4e33_169.jpeg?w=700&q=90"></img>
							</figure>
						</div>
						<div className="column mt-6 is-5 ml-6">
							<form onSubmit={saveUserorder}>
								<div className="field">
									<label  className="label"> Email</label>
									<div className="control">
										<input type="text" 
										className="input" 
										value = {Email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='Email' 
										/>
									</div>
								</div>
								<div className="field">
								<label  className="label mt-5"> Game ID</label>
									<div className="control">
										<input type="text" 
										className="input" 
										value = {GameID}
										onChange={(e) => setGameID(e.target.value)}
										placeholder='Game ID' 
										/>
									</div>      
								</div>          
								<p className="description mt-6">
									Pilih Jumlah UC yang akan ditop-up
								</p>
								<div className='mt-5'>
									{games.map((game) => (
										<ToggleButton
											className={styles.selecttopup}
											key={game.id}
											id={`option-${game.id}`}
											type="radio"
											variant={'outline-warning'}
											name="options"
											value={game.Amount}
											checked={selectedAmount == game.Amount}
											onChange={(e) => setselectedAmount(e.currentTarget.value)}
										>
											<div className='buttonlabel'>
											<span>
											{game.Amount}<br></br>
											{game.Price}
											</span> 
											</div>  
										</ToggleButton>
										

									))}
									

									<div className="field mt-5">
                    					<button type='submit' className="button is-link is-medium" onClick={handleSubmit}>Checkout</button>
                					</div>
								</div>
							</form>
						</div>
				</div>
			</div>
			</section>
		  <br></br>
	</>
	)
}

export default PUBGM