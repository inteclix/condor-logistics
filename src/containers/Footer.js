import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MyMap extends React.Component {
  render() {
    return (
      <Map
        center={[36.054911, 4.756988]}
        zoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[36.054911, 4.756988]}>
          <Popup>Condor logistics</Popup>
        </Marker>
      </Map>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="top">
          <div className="mission">
            <h1>Notre Mission</h1>
            <p>
              Notre mission est de vous accompagner dans votre développement en
              apportant le savoir-faire et l’expérience de nos équipes.Votre
              satisfaction, celle de nos actionnaires et de nos collaborateurs
              sont nos préoccupations permanentes et font de
              <b> Condor logistics </b>
              une référence sur les métiers de la logistique et du transport. La
              rentabilité est notre gage de pérennité et d’efficacité. Le
              respect de nos valeurs IRIS (Initiative, Respect, Intégrité,
              Solidarité) est un incontournable de toutes nos approches
              managériales. Notre force relève également de notre capacité à
              proposer des solutions globales pour vous permettre d’externaliser
              vos flux en toute sécurité et vous recentrer sur votre cœur de
              métier.
            </p>
          </div>
          <div className="trouver">
            <h1>Nous trouver</h1>
            <MyMap />
          </div>
        </div>
        <div className="bottom">
          <div className="logo">
            <a onClick={() => window.scrollTo(0, 0)}>
              <FaArrowAltCircleUp size={40} />
            </a>
            <img src={require("../imgs/logo.png")} />
          </div>
          <div>
            <p>
              © 2019 Condor logistics Powred by{" "}
              <a target="_blank" href="https://inteclix.github.io">
                inTecLix
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
