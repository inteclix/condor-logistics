import React from "react";
import { Link, withRouter } from "react-router-dom";

import HandleClickOutside from "../components/HandleClickOutside";

import { FaHome } from "react-icons/fa";

class Menu extends React.Component {
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
      <HandleClickOutside
        handleClick={() =>
          this.setState({
            activeMenu: false
          })
        }
      >
        <nav
          className={
            this.state.activeMenu
              ? "cd-stretchy-nav nav-is-visible"
              : "cd-stretchy-nav"
          }
        >
          <a className="cd-nav-trigger" onClick={this.toggleMenu}>
            <span aria-hidden="true" />
          </a>
          <ul handleClick={this.toggleMenu}>
            <li>
              <Link
                className={location.pathname === "/" ? "active" : ""}
                to="/"
              >
                <span>Accueil</span>
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
          <span aria-hidden="true" className="stretchy-nav-bg" />
        </nav>
      </HandleClickOutside>
    );
  }
}

export default withRouter(Menu);
