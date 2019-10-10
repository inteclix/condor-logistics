import React from "react";
import {Link} from "react-router-dom"
export default class Marchandises extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="content" >
          <h1>Transport public de marchandis</h1>
          <p>Condor logistics propose à la location tous types de matériels de levage : transpalettes à main, transpalettes électriques, chariots élévateurs (de 1.5t à 3.5t), nacelles, grues auto-portées, Manitou…</p>
          <div className="images">
            <img  src="http://fba-dz.com/wp-content/uploads/2019/03/20190325_140902-768x373.jpg"/>
            <img  src="http://fba-dz.com/wp-content/uploads/2019/03/20190325_140902-768x373.jpg"/>
            <img  src="http://fba-dz.com/wp-content/uploads/2019/03/20190325_140902-768x373.jpg"/>
            <img  src="http://fba-dz.com/wp-content/uploads/2019/03/20190325_140902-768x373.jpg"/>
          </div>
          <Link to="/nos-contacter" className="button">Nous contacter</Link>
        </div>
      </div>
    );
  }
}

/**
 * 
 * transport public de marchandis : camions 20T, camions 10T, camions 05T, porte de chair
 * trasport de personel : 
 * location de tous les types de voitures et engins
 * la maintenance des materiel roulant et engins
 */