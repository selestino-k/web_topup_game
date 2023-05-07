import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import {useRouter } from "next/router";
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from '../components/games.module.css'
import axios from 'axios'
import "bulma/css/bulma.css";





const PUBGM = ()=> {
	const [games, setGames] = useState([]);
	const [Email, setEmail] = useState('');
	const [GameID,setGameID] = useState('');
	const [Amount] = useState('');
	const [selectedAmount, setselectedAmount] = useState('');

	const router = useRouter()

	useEffect(() => {
        getGames();
    }, []);

	const getGames = async () => {
        const response = await axios.get("http://localhost:5000/gamepubgm");
		setGames(response.data);
    }
	
	function handleSubmit() {
        console.log("Selected value:", selectedAmount);
        // Do something with the selected value, such as submitting it to a server
      }

	const saveUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/userorder',{
                Email,
                Amount,
                GameID
            });
            router.push("/ordersuccess");
        } catch (error){
            console.log(error);
        }
    }
	

	return (
		<>
		<Navigationbar></Navigationbar>
			<Head>
			  <title>PUBGM Top UP</title>
			</Head>
			<section className="hero">
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
									{games.map((games,idx) => (
										<ToggleButton
											className={styles.selecttopup}
											key={idx}
											id={`radio-${idx}`}
											type="radio"
											variant={'outline-warning'}
											name="options"
											value={games.Amount}
											checked={selectedAmount === games.Amount}
											onChange={(e) => setselectedAmount(e.currentTarget.value)}
										>
											<div className='buttonlabel'>
											<span>
											{games.Amount}<br></br>
											{games.Price}
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
			</section>
		  <br></br>
	</>
	)
}

export default PUBGM