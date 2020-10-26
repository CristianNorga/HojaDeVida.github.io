import React from "react";
import ImgUser from "../../assets/static/ejemplo1.jpg";
import "../../assets/styles/css/pages/parts/Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Nav = () => (

    <nav className="nav">

            <div className="nav__bar">
                <a className="nav__a" href={"false"}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>

            <div className="nav__account">
                <div className="nav__profile">
                    <img src={ImgUser} alt="soy yo"/>
                </div>
                <div className="nav__identity">
                    <h4 className="nav__name">Cristian David Noreña</h4>
                    <h4 className="nav__id">1.037.640.856</h4>
                </div>
            </div>

        </nav>

);

export default Nav