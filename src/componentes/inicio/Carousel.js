import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import imagenSlide from '../../imagenes/imagen-slide.jpg'
import '../../hojas-de-estilo/Carousel.css';

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-edit" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagenSlide} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imagenSlide} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={imagenSlide} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;