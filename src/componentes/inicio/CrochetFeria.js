import React from "react";
import "../../hojas-de-estilo/CrochetFeria.css";

const CrochetFeria =() => {
    return (
        <>
            <div className='contenedor-opciones'>
                <div className='crochet'>
                    <h2 className='h2-opciones'>CROCHET</h2>
                    <button>COMPRAR</button>
                </div>
                <div className='feria'>
                    <h2 className='h2-opciones'>FERIA</h2>
                    <button>COMPRAR</button>
                </div>
            </div>
        </>
    );
}

export default CrochetFeria;