import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import {useRouter } from "next/router";
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from '../components/games.module.css'
import axios from 'axios'
import "bulma/css/bulma.css";

const Freefire = ()=> {
	const [games, setGames] = useState([]);
	const [Email, setEmail] = useState('');
	const [GameID,setGameID] = useState('');
	const [selectedAmount, setselectedAmount] = useState(null);

	const router = useRouter()

	useEffect(() => {
        getGames();
    }, []);

	const getGames = async () => {
        const response = await axios.get("https://rich-teal-turkey-veil.cyclic.app/gamefreefire");
		setGames(response.data);
    }
	
	const saveUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('https://rich-teal-turkey-veil.cyclic.app/userorder',{
                Email,
				GameID,
                Amount : selectedAmount,
				Game : "FF"
                
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
			  <title>Free Fire  Top Up - MASBRO.STORE</title>
			</Head>
			<section>
			<div className='container mt-6'>
			  	<div className="columns is-centered ">
						<div className="column is-4">
						<h1 className="title is-3">Free Fire</h1>
							<figure className='image is-5by3'>
								<img src="https://cdn0-production-images-kly.akamaized.net/uEiyrGOm1eroBJznHT8VwB9CRxQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4058234/original/090110200_1655708618-Logo_Baru_Free_Fire.jpg"></img>
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
								<label  className="label mt-5"> Player ID</label>
									<div className="control">
										<input type="text" 
										className="input" 
										value = {GameID}
										onChange={(e) => setGameID(e.target.value)}
										placeholder='Player ID' 
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
											variant={'outline-danger'}
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

export default Freefire