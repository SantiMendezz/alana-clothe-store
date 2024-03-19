import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../../hojas-de-estilo/Novedades.css';

import Top from '../../imagenes/top.jpg';
import Bolsa from '../../imagenes/bolsa-de-la-compra.png';

const Novedades = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <>
        <h3>Novedades</h3>
        <Carousel responsive={responsive} className='contenedor-novedades'>
            <div className='novedades-item'>
                <a href='/'>
                <img className='novedades-img' src={Top} alt='top de lana' />
                <img className='item-tienda' src={Bolsa} alt='tienda' />
                </a>
                <h6>Top Franchesca</h6>
                <p>$8.000</p>
            </div>

            <div className='novedades-item'>
                <a href='/'>
                <img className='novedades-img' src={Top} alt='top de lana' />
                <img className='item-tienda' src={Bolsa} alt='tienda' />
                </a>
                <h6>Top Franchesca</h6>
                <p>$8.000</p>
            </div>

            <div className='novedades-item'>
                <a href='/'>
                <img className='novedades-img' src={Top} alt='top de lana' />
                <img className='item-tienda' src={Bolsa} alt='tienda' />
                </a>
                <h6>Top Franchesca</h6>
                <p>$8.000</p>
            </div>

            <div className='novedades-item'>
                <a href='/'>
                <img className='novedades-img' src={Top} alt='top de lana' />
                <img className='item-tienda' src={Bolsa} alt='tienda' />
                </a>
                <h6>Top Franchesca</h6>
                <p>$8.000</p>
            </div>
            
        </Carousel>
        </>
    );
}

export default Novedades;