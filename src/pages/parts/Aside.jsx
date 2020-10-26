import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/css/pages/parts/Aside.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUser,faGraduationCap,faSuitcase,faChartLine,faComments,faMobileAlt,faImage }from '@fortawesome/free-solid-svg-icons';

const Aside = () =>
(

<aside className="main">

    <div className="main__head">
        <h2>developer</h2>
    </div>

    <nav className="main__body">

        <ul className="main__ul">

            <li className="main__li">
                <Link to="/" className="main__a">
                    <FontAwesomeIcon className="main__icon" icon={faHome}/>
                    <p className="main__text">Inicio</p>
                </Link>
            </li>

            <li className="main__li">
                <Link to="/" className="main__a--actived">
                    <FontAwesomeIcon className="main__icon" icon={faUser}/>
                    <p className="main__text">Sobre mi</p>
                </Link>
            </li>
            <li className="main__li">
                <Link to="/formacion" className="main__a">
                    <FontAwesomeIcon className="main__icon" icon={faGraduationCap}/>
                    <p className="main__text">Formación</p>
                </Link>
            </li>
            <li className="main__li">
                <a href={"false"} className="main__a">
                    <FontAwesomeIcon className="main__icon" icon={faSuitcase}/>
                    <p className="main__text">Experiencia</p>
                </a>
            </li>
            <li className="main__li">
                <a href={"false"} className="main__a">
                    <FontAwesomeIcon className="main__icon" icon={faChartLine}/>
                    <p className="main__text">Habilidades</p>
                </a>
            </li>
            <li className="main__li">
                <a href={"false"} className="main__a">
                    <FontAwesomeIcon className="main__icon"  icon={faComments}/>
                    <p className="main__text">Recomendaciones</p>
                </a>
            </li>
            <li className="main__li">
                <a href={"false"} className="main__a">
                    <FontAwesomeIcon className="main__icon" icon={faMobileAlt}/>
                    <p className="main__text">Contacto</p>
                </a>
            </li>
            <li className="main__li">
                <a href={"false"} className="main__a">
                    <FontAwesomeIcon className="main__icon" icon={faImage}/>
                    <p className="main__text">Anexo</p>
                </a>
            </li>
        </ul>
    </nav>
</aside>

);

export default Aside;