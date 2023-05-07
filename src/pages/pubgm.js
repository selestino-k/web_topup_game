import Link from 'next/link';
import Head from 'next/head'
import Navigationbar from '@/components/navbar';
import { Card,Button, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Router, useRouter } from "next/router";
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from '../components/games.module.css'
import axios from 'axios'
import "bulma/css/bulma.css";





const PUBGM = ()=> {
	const [games, setGames] = useState([]);
	const [Email, setEmail] = useState('');
	const [GameID,setGameID] = useState('');
	const [Amount,setAmount] = useState('');

  	const [radioValue, setRadioValue] = useState('0');
	
	const router = useRouter()

	useEffect(() => {
        getGames();
    }, []);

	const getGames = async () => {
        const response = await axios.get("http://localhost:5000/gamepubgm");
		setGames(response.data);
    }
	console.log(games);
	function handleSubmit() {
        console.log("Selected value:", Amount);
        // Do something with the selected value, such as submitting it to a server
      }

	const saveUserorder = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/userorder',{
                Email,
                Amount,
                GameID,
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
			  <div className="columns mt-5 is-centered">
					<div className="column is-half">
						<h1 className="title">PUBG Mobile</h1>
						<div className="column is-half">
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
								<label  className="label"> Game ID</label>
									<div className="control">
										<input type="text" 
										className="input" 
										value = {GameID}
										onChange={(e) => setGameID(e.target.value)}
										placeholder='Game ID' 
										/>
									</div>      
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
											value={games.Amount}
											checked={radioValue === games.Amount}
											onChange={(e) => setRadioValue(e.currentTarget.value)}
										>
											<div className='buttonlabel'>
											<span>
											{games.Amount}<br></br>
											{games.Price}
											</span> 
											</div>  
										</ToggleButton>

									))}
								</div>
								<div className="field">
                    				<button type='submit' className="button is-link-medium" onClick={handleSubmit}>Save</button>
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