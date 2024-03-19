import React from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/Header.css';
import { IoIosSearch } from "react-icons/io";
import logoAlana from '../imagenes/alana-logo.jpg';
import logoFacebook from '../imagenes/facebook-logo.png';
import logoInstagram from '../imagenes/instagram-logo.png';
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div>
            <header className='header-container'>
                <div className='busqueda-container'>
                    <input type='text' className='input-busqueda' placeholder='Buscar...'/>
                    <button className='boton-busqueda'><IoIosSearch className='logo-busqueda' /></button>
                </div>
                <div className='logo-container'>
                    <Link to='/alana-clothe-store/'>
                        <img src={logoAlana} alt="Logo Alana" className='alana-logo'/>
                    </Link>
                </div>
                <div className='social-container'>
                    {/* target="_blank" rel="noreferrer" -> Para abrir en otra pestaña */}
                    <div className='cuenta-container'>
                        <IoPersonSharp alt='Imagen de cuenta' className='cuenta-logo cuenta-carrito-logos' />
                        <ul className='menu-vertical'>
                            <li><Link to='/alana-clothe-store/' className='links-cuenta'>Crear Cuenta</Link></li>
                            <li><Link to='/alana-clothe-store/' className='links-cuenta'>Iniciar Sesión</Link></li>
                        </ul>
                    </div>
                    <div className='carrito'>
                        <FaCartShopping className='carrito-logo cuenta-carrito-logos'/>
                        <span className='total_items'>0</span>
                    </div>
                    <a href='https://www.facebook.com/alana.clothes.store' target="_blank" rel="noreferrer"><img src={logoFacebook} alt="Logo Facebook" className='media-logo face-logo'/></a>
                    <a href='https://www.instagram.com/alana.clothes.store/' target="_blank" rel="noreferrer"><img src={logoInstagram} alt="Logo Instagram" className='media-logo insta-logo'/></a>
                </div>
            </header>
        </div>
    );
}

export default Header;