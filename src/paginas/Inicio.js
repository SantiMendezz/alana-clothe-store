import React from "react";
import Carousel from "../componentes/inicio/Carousel";
import Redes from "../componentes/inicio/Redes";
import CrochetFeria from "../componentes/inicio/CrochetFeria";
import Novedades from "../componentes/inicio/Novedades";

const Inicio = () => {
    return (
        <>
            <Carousel />
            <Redes />
            <CrochetFeria />
            <Novedades/>
        </>
    );
}

export default Inicio;