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

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="pages">
            <Route path={"/"} exact component={Accueil} />
            <Route path={"/nos-services"} component={Services} />
            <Route path={"/nos-contacter"} component={Contactes} />
            <Route path={"/enterprise"} component={Enterprise} />
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
