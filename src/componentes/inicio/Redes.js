import React from "react";
import Facebook from "../../imagenes/facebook-logo.png";
import Instagram from "../../imagenes/instagram-logo.png";
import '../../hojas-de-estilo/Redes.css';

const Redes = () => {
    return (
        <>
        <div className='contenedor-redes'>
            <div className='seguinos'>
                <h3 className='h3-seguinos'>Seguinos</h3>
            </div>
            
            <div className='redes'>
                <div className='facebook'>
                    <a href='https://www.facebook.com/alana.clothes.store' className='enlace-redes'>
                        <p className='texto'><img className='facebook-img red-img' src={Facebook} alt='Enlace pagina de Facebook Alana' />@alana.clothes.store</p>
                    </a>
                </div>
                <div className='instagram'>
                    <a href='https://www.instagram.com/alana.clothes.store/' className='enlace-redes'>
                        <p className='texto'><img className='instagram-img red-img' src={Instagram} alt='Enlace pagina de Instagram Alana' />@alana.clothes.store</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Redes;