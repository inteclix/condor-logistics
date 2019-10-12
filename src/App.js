import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./containers/Header";
import Menu from "./containers/Menu";
import Footer from "./containers/Footer";
import Sidebar from "./containers/Sidebar";

import { colors } from "./constants";

import Services from "./pages/Services";
import Enterprise from "./pages/Enterprise";
import Contactes from "./pages/Contactes";
import Accueil from "./pages/Accueil";
import Marchandises from "./pages/Marchandises";
import Personel from "./pages/Personel";
import Location from "./pages/Location";
import Maintenance from "./pages/Maintenance";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div className="app">
          <Header />
          <div className="pages">
            <Route path={"/"} exact component={Accueil} />
            <Route path={"/nos-services"} component={Services} />
            <Route path={"/nos-contacter"} component={Contactes} />
            <Route path={"/enterprise"} component={Enterprise} />
            <Route path={"/trasport-de-personel"} component={Personel} />
            <Route
              path={"/location-de-tous-les-types-de-voitures-et-engins"}
              component={Location}
            />
            <Route
              path={"/maintenance-des-materiel-roulant-et-engins"}
              component={Maintenance}
            />
            <Route
              path={"/transport-public-marchandises"}
              component={Marchandises}
            />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
