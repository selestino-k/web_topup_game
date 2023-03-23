import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'


export default function footer() {
  return (
    <MDBFooter  className='text-center text-lg-start' style={{backgroundColor:'#36439f', padding:'2em', color:'white', height:'50vmin',}}>
     

      <section className=''style={{backgroundColor:'#36439f', padding:'2em', color:'white', height:'20vmin'}} >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
                Masbro.STORE
              </h6>
              <p>
                MASBRO.STORE adalah jasa penyedia layanan top up game yang terjangkau bagi semua kalangan gamers di Indonesia.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-decoration-none'>Layanan</h6>
              <p>
                <a href='/topup' className='text-reset text-decoration-none'>
                  Top Up Game
                </a>
              </p>
              <p>
                <a href='informasi' className='text-reset text-decoration-none'>
                  Informasi
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Layanan Pengguna
                </a>
              </p>
              <p>
                
              </p>
            </MDBCol>

            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <FontAwesomeIcon icon={faLocationDot} />    Kupang, Nusa Tenggara Timur
              </p>
              <p>
              <FontAwesomeIcon icon={faEnvelope} />    masbro.store@gmail.com
              </p>
              <p>
              <FontAwesomeIcon icon={faPhone} />    +62 852 5625 5208
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter>
  );
}