import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from '../components/games.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import handleChange from '../components/input';

export function PUBGM() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('0');
  const radios = [
    { name: '50+2 UC', amount:'Rp10.000' },
    { name: '100+5 UC',amount:'Rp20.000' },
    { name: '250+13 UC',amount:'Rp50.000' },
    { name: '500+30 UC',amount:'Rp100.000'},
    { name: '1500+150 UC',amount:'Rp300.000'},
    { name: '2500+375 UC', amount:'Rp500.000'},

  ];

  return (
    <>
    <div>
    <p className="description">
			      	Masukkan ID PUBGM anda
			      </p>
    <input className={styles.ID} type="text" onChange={handleChange}></input>

    </div>

      <br />
        <p className="description">
			      	Pilih Jumlah UC yang akan ditop-up
        </p>
        <div className={styles.buttoncont} >
        {radios.map((radio, idx) => (
          
          <ToggleButton
            className={styles.selecttopup}
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-warning'}
            name="radio"
            value={radio.name}
            checked={radioValue === radio.name}
            onChange={(e) => setRadioValue(e.currentTarget.value)}

          >
            <div className='buttonlabel'><span>
            {radio.name} <br></br>
            {radio.amount}
            </span> 
            </div>  
          </ToggleButton>

        ))}
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
					
            
        		
    </>
  );
}


export function FreeFire() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: '12 Diamonds', amount:'Rp1.500' },
      { name: '50 Diamonds',  amount:'Rp8.000' },
      { name: '70 Diamonds', amount:'Rp10.000' },
      { name: '140 Diamonds',  amount:'Rp20.000' },
      { name: '355 Diamonds',  amount:'Rp50.000' },
      { name: '720 Diamonds',  amount:'Rp100.000' },
      { name: '1450 Diamonds',  amount:'Rp200.000' },
      { name: '3640 Diamonds',  amount:'Rp500.000' },

    ];
  
    return (
      <>
      <div>
      <p className="description">
                        Masukkan ID FF anda
                    </p>
      <input className={styles.ID}type="text"></input>
  
      </div>
  
        <br />
          <p className="description">
                        Pilih Jumlah Diamonds yang akan ditop-up
          </p>
          <div  className={styles.buttoncont}>
          {radios.map((radio, idx) => (
            <ToggleButton
              className={styles.selecttopup}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'outline-danger'}
              name="radio"
              value={radio.name}
              checked={radioValue === radio.name}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <div className='buttonlabel'><span>
              {radio.name} <br></br>
              {radio.amount}
              </span>
              </div>  
            </ToggleButton>
            
          ))}
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
      </>
    );
  }
  

 export function MLBB() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: '5 Diamonds',  amount:'Rp1.500' },
      { name: '17+2 Diamonds',  amount:'Rp5.500' },
      { name: '25+3 Diamonds',  amount:'Rp8.000' },
      { name: '53+6 Diamonds',  amount:'Rp16.000' },
      { name: '154+16 Diamonds', amount:'Rp46.000' },
      { name: '256+40 Diamonds',  amount:'Rp80.000' },
      { name: '367+41 Diamonds',  amount:'Rp105.000' },
      { name: '503+65 Diamonds',  amount:'Rp150.000' },
      { name: '774+101 Diamonds',  amount:'Rp220.000' },
      { name: '1708+302 Diamonds',  amount:'Rp485.000' },
      { name: '4003+827 Diamonds',  amount:'Rp1.150.000' },
    
    ];
  
    return (
      <>
      <div>
      <p className="description">
                        Masukkan ID MLBB dan ID Zona anda
                    </p>
      <input className={styles.ID}type="text" placeholder='ID Pengguna'></input>
      <input className={styles.zone} type="text" placeholder='ID Zona'></input>
  
      </div>
  
        <br />
          <p className="description">
                        Pilih Jumlah Diamonds yang akan ditop-up
          </p>
          <div className={styles.buttoncont} >
          {radios.map((radio, idx) => (
            <ToggleButton
              className={styles.selecttopup}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'outline-primary'}
              name="radio"
              value={radio.name}
              checked={radioValue === radio.name}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <div className='buttonlabel'><span>
              {radio.name} <br></br>
              {radio.amount}
              </span>
              </div>  
            </ToggleButton>
            
          ))}
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
      </>
    );
  }
  
  

