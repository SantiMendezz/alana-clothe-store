import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/Footer.css';

import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import MercadoPago from '../imagenes/Mercado-Pago-Logo.png';
import DineroMinimal from '../imagenes/dineroMinimal.png';
import Dinero from '../imagenes/dinero.png';
import Tienda from '../imagenes/tienda.png';
import Estrechar from '../imagenes/apreton-de-manos.png';

const Footer = () => {
    return(
        <footer>
            <div className='footer-contenedor'>
                <div className='contenedor-footer-1'>
                    <div className='div-nav'>
                        <h4>Categorías</h4>
                        <nav className='footer-bar'>
                            <Link className='footer-link' to='/'>Inicio</Link>
                            <Link className='footer-link' to='/productos'>Productos</Link>
                            <Link className='footer-link' to='/quienes-somos'>Quienes Somos</Link>
                            <Link className='footer-link' to='/contacto'>Contacto</Link>
                            <Link className='footer-link' to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
                            <Link className='footer-link' to='/guia-de-talles'>Guía de talles</Link>
                        </nav>
                    </div>
                    <div className='div-contactanos'>
                        <h4>Contáctanos</h4>
                        <div>
                            <FaWhatsapp className='icon-contactanos'/>
                            <p>+3794-912314</p>
                        </div>
                        <div>
                            <FaLocationDot className='icon-contactanos'/>
                            <p>Pick Up: Zona Barrio San Benito</p>
                        </div>
                    </div>
                    <div className='div-contactados'>
                        <h4>Sigamos Conectados</h4>
                        <a href='https://www.facebook.com/alana.clothes.store' target="_blank" rel="noreferrer"><FaFacebookSquare className='icon-conectados' /></a>
                        <a href='https://www.instagram.com/alana.clothes.store/' target="_blank" rel="noreferrer"><FaInstagram className='icon-conectados' /></a>
                    </div>
                </div>

                <hr></hr>

                <div>
                    <div>
                        <h4 className='medios'>Medios de Pago</h4>
                        <img src={MercadoPago} alt="Mercado Pago" className='iconos-footer'/>
                        <img src={DineroMinimal} alt="Dinero" className='iconos-footer'/>
                        <img src={Dinero} alt="Dinero" className='iconos-footer'/>
                    </div>
                    <div>
                        <h4 className='medios'>Medios de Envío</h4>
                        <img src={Tienda} alt="Tienda" className='iconos-footer'/>
                        <img src={Estrechar} alt="Estrechar" className='iconos-footer'/>
                    </div>
                </div>
            </div>

            <div className='copy'>
                <p>&copy; Copyright Alana Clothe’s Store - 2024. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;