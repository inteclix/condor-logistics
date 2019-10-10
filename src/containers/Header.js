import React from "react";
import { Link, withRouter } from "react-router-dom";

import HandleClickOutside from "../components/HandleClickOutside";

import {
  FaHome,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare
} from "react-icons/fa";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuId: "enterprise",
      activeMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    const { location } = this.props;
    return (
      <header>
        <div className="contact-header">
          <a>Nous Contacter: </a>
          <a target="_blank" href="https://facebook.com" className="icon">
            <FaFacebookSquare size={20} />
          </a>
          <a target="_blank" href="https://linkedin.com" className="icon">
            <FaLinkedin size={20} />
          </a>
          <a target="_blank" href="https://twitter.com" className="icon">
            <FaTwitterSquare size={20} />
          </a>
          <a>Téléphone: +213 (0) 540 05 50 10</a>
        </div>
        <div className="menu-header">
          <a className="logo">
            <img src={require("../imgs/logo.png")} />
          </a>
          <ul>
            <li>
              <Link
                className={location.pathname === "/" ? "active" : ""}
                to="/"
              >
                <span>Accueie</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname.startsWith("/enterprise") ? "active" : ""
                }
                to="/enterprise"
              >
                <span>L'enterprise</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname.startsWith("/nos-services") ? "active" : ""
                }
                to="/nos-services"
              >
                <span>Nous services</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname.startsWith("/nos-contacter") ? "active" : ""
                }
                to="/nos-contacter"
              >
                <span>Nous contacter</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
