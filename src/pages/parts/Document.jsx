import React from "react";
import "../../assets/styles/css/pages/parts/Document.css"

const Document = ({children,title}) =>
(
/* SECCION DE CABECERA */
<section className="document">
  <div className="docHeader">
    <div className="docHeader__container">
      <div className="docHeader__title">
        <h1 className="docHeader__h1">{title}</h1>
      </div>
      <div className="docHeader__breadCrump">
        <ol className="docHeader__ol">
          <li className="docHeader__link"><a className="link--blue" href={"false"}>Home </a></li>
          <li className="docHeader__actPage">/ {title}</li>
        </ol>
      </div>
    </div>
  </div>
  <div className="docBody">
    <div className="separator2" />
    {children}

  </div>
</section>

);

export default Document;

