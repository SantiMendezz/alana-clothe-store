import {React, useRef } from "react";
import { Link } from "react-router-dom";
import '../hojas-de-estilo/Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    // Declarar una variable ref dentro de tu componente funcional utilizando el Hook -> useRef
    const navRef = useRef();

    const closeNavBar = () => {
        //Eliminamos la clase responsive_nav -> de la etiqueta que llame al evento
        navRef.current.classList.remove("responsive_nav");

        // Restaurar el scrollbar
        document.body.style.overflow = "auto";
    }

    const showNavBar = () => {
        //Apalancamos o agregamos a la etiqueta que llame el evento -> la clase responsive_nav
        navRef.current.classList.toggle("responsive_nav");

        // Ocultar el scrollbar
        document.body.style.overflow = "hidden";
    }

    return (
        <div className='container-navbar'>
            <nav className='nav-bar' ref={navRef}>
                <Link className='link' to='/' onClick={closeNavBar}>Inicio</Link>
                <Link className='link' to='/productos' onClick={closeNavBar}>Productos</Link>
                <Link className='link' to='/quienes-somos' onClick={closeNavBar}>Quienes Somos</Link>
                <Link className='link' to='/contacto' onClick={closeNavBar}>Contacto</Link>
                <Link className='link' to='/preguntas-frecuentes' onClick={closeNavBar}>Preguntas Frecuentes</Link>
                <Link className='link' to='/guia-de-talles' onClick={closeNavBar}>Guía de talles</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </div>
    );
}

export default Navbar;