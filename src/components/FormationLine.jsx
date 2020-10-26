import React from "react";
import { connect } from "react-redux";
import CarouselItem from "./CarouselItem";
import "../assets/styles/css/components/Formation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap,faBook,faCertificate,faTrophy }from '@fortawesome/free-solid-svg-icons';

const FormationLine = ({bachillerato, superior, cursos, reconocimientos}) =>
(
/* SECCION CONTENIDO */
<section className="formation">
  {/* FORMACION */}
  <div className="formation__container">
    <div className="formation__bloq1">
      <span className="formation__icon">
        <FontAwesomeIcon className="formation__i" icon={faGraduationCap}/>
      </span>
      <h6 className="formation__bq1Title">2006 - 2011</h6>
    </div>
    <div className="formation__bloq2">
      <h2 className="formation__bq2Title">Bachillerato</h2>
      <section className="carousel">
        <div className="carousel__container">
          {bachillerato.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </div>
      </section>
    </div>
  </div>
  {/* EDUCACION SUPERIOR */}
  <div className="formation__container">
    <div className="formation__bloq1">
      <span className="formation__icon">
        <FontAwesomeIcon className="formation__i" icon={faBook}/>
      </span>
      <h6 className="formation__bq1Title">2019 - 2020</h6>
    </div>
    <div className="formation__bloq2">
      <h2 className="formation__bq2Title">Educación superior</h2>
      <section className="carousel">
        <div className="carousel__container">
          {superior.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </div>
      </section>
    </div>
  </div>
  {/* CERTIFICADOS  */}
  <div className="formation__container">
    <div className="formation__bloq1">
      <span className="formation__icon">
        <FontAwesomeIcon className="formation__i" icon={faCertificate}/>
      </span>
      <h6 className="formation__bq1Title">2019 - 2020</h6>
    </div>
    <div className="formation__bloq2">
      <h2 className="formation__bq2Title">Cursos con certificados</h2>
      <section className="carousel">
        <div className="carousel__container">
          {cursos.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </div>
      </section>
    </div>
  </div>
  {/* RECONOCIMIENTOS  */}
  <div className="formation__container">
    <div className="formation__bloq1--leading">
      <span className="formation__icon--leading">
        <FontAwesomeIcon className="formation__i--leading" icon={faTrophy}/>
      </span>
      <h6 className="formation__bq1Title--leading">2010 - 2019</h6>
    </div>
    <div className="formation__bloq2--leading">
      <h2 className="formation__bq2Title--leading">Reconocimientos</h2>
      <section className="carousel">
        <div className="carousel__container">
          {reconocimientos.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </div>
      </section>
    </div>
  </div>
</section>

);

const mapStateToProps = state => {
  return {
      bachillerato: state.bachillerato,
      superior: state.superior,
      cursos: state.cursos,
      reconocimientos: state.reconocimientos
  }
}

export default connect(mapStateToProps, null)(FormationLine);