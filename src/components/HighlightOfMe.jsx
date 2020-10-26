import React from "react";
import IstMe from "../assets/static/ejmplo2.svg";
import "../assets/styles/css/components/AboutMe.css";

const HighlightOfMe  = () =>
(
/* SECCION SOBRE MI */
<section className="aboutMe">
      <div className="aboutMe__container">
        <p>Soy una persona con capacidad de afrontar las dificultades que se presenten en el trascurso de
          los proyectos a realizar, proactivo y capaz de profundizar en temas de desconocimiento y así
          lograr adquirir las características necesarias para brindar un mejor resultado. Soy una persona
          capciosa dispuesta a adquirir conocimientos continuamente para así perfeccionar cada proceso y
          mejorar mi rendimiento.
        </p>
      </div>
      <p className="aboutMe__p">
        <strong>Creativo: </strong>abierto a múltiples puntos de vistas en pro al proyecto.
      </p>
      <div className="aboutMe__imgPrincipal">
        <img src={IstMe} alt="soy yo bien presentado" />
      </div>
      <p className="aboutMe__p">
        <strong>Proactivo: </strong> dispuesto a buscar las soluciones apropiadas de los problemas que
        surjan.
      </p>
      <p className="aboutMe__p">
        <strong>Resiliente: </strong>me antepongo al estrés y a las emociones negativas para superar un
        problema
        inteligentemente.
      </p>
      <p className="aboutMe__p">
        <strong>Trabajo en equipo: </strong>aporto ideas y las recibo de la misma manera para así lograr los
        mejores resultados
      </p>
      <div className="separator--reverse" />
    </section>
);

export default HighlightOfMe;