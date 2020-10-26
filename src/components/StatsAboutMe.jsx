import React from "react";
import "../assets/scripts/components/StatsAboutMe";
import "../assets/styles/css/components/AboutMe.css";

const StatsAboutMe = () =>
(
    /* SECCION DE ESTADISTICAS */
    <section id="statsAboutMe" className="statsAboutMe">
      <div className="chartJs">
        <div className="chartJs__intCircle">
          <p>90 %</p>
        </div>
        <canvas className="chartJs__canvas--pie" porcent={90}>
        </canvas>
        <div className="chartJs__nameSkill">
          <p>Honestidad</p>
        </div>
      </div>
      <div className="chartJs">
        <div className="chartJs__intCircle">
          <p>75 %</p>
        </div>
        <canvas className="chartJs__canvas--pie" porcent={75}>
        </canvas>
        <div className="chartJs__nameSkill">
          <p>Gratitud</p>
        </div>
      </div>
      <div className="chartJs">
        <div className="chartJs__intCircle">
          <p>88 %</p>
        </div>
        <canvas className="chartJs__canvas--pie" porcent={88}>
        </canvas>
        <div className="chartJs__nameSkill">
          <p>Humildad</p>
        </div>
      </div>
      <div className="chartJs">
        <div className="chartJs__intCircle">
          <p>99 %</p>
        </div>
        <canvas className="chartJs__canvas--pie" porcent={99}>
        </canvas>
        <div className="chartJs__nameSkill">
          <p>Prudencia</p>
        </div>
      </div>
      <div className="chartJs">
        <div className="chartJs__intCircle">
          <p>99 %</p>
        </div>
        <canvas className="chartJs__canvas--pie" porcent={99}>
        </canvas>
        <div className="chartJs__nameSkill">
          <p>Respeto</p>
        </div>
      </div>
      <div className="chartJs">
        <div className="chartJs__intCircle">
          <p>92 %</p>
        </div>
        <canvas className="chartJs__canvas--pie" porcent={92}>
        </canvas>
        <div className="chartJs__nameSkill">
          <p>Responsabilidad</p>
        </div>
      </div>
    </section>
);

export default StatsAboutMe;