import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head'
import styles from '../components/games.module.css'
import {PUBGM,FreeFire,MLBB} from '../components/jumlahtopup'
import { useEffect, useState } from 'react';






function Topup() {
	const [game,selectgame] = useState("game")

	const[PUBGMContentVisible,setPUBGMContentVisible] = useState(false);
	const[FFContentVisible,setFFContentVisible] = useState(false);
	const[MLBBContentVisible,setMLBBContentVisible] = useState(false);

	useEffect(() => {
		game === "pubgm" ? setPUBGMContentVisible(true):setPUBGMContentVisible(false);
		game === "freefire" ? setFFContentVisible(true):setFFContentVisible(false);
		game === "mlbb" ? setMLBBContentVisible(true):setMLBBContentVisible(false);

	});
	
	const handleOnchange = (e) =>{
		selectgame(e.target.value)
	}
	const renderresult = () =>{
		let result;
		game ==="game";
		return result;
	}
	return (
		
		<>
			<Head>
			  <title>Top Up</title>
			</Head>
			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<h1 className="title">Top Up</h1>
							<p className="description">
								Silahkan pilih game anda yang ingin di topup
							</p>
						<div className="">
							<select  className={styles.selectgame} id="game" value={game} onChange={handleOnchange}>
								<option value="" >Pilih Game</option>

								<option value="pubgm">PUBG Mobile</option>
								<option value="freefire">Free Fire</option>
								<option value="mlbb">Mobile Legends:Bang Bang</option>
								<option value="genshin">Genshin Impact</option>
								<option value="codm">COD Mobile</option>
								<option value="higgs">Higgs Domino</option>
							</select>
						</div>			
								{PUBGMContentVisible&&<PUBGM/>}
								{FFContentVisible&&<FreeFire/>}
								{MLBBContentVisible&&<MLBB/>}
								<br></br>
					</div>
	      		</div>
			</section>
			<div style={{height: "50em"}}>

			</div>
			
			<Footer />

		</>
	);
}

export default Topup;