import React from "react";
import logo from '../images/logo-awesome-profile-cards.svg';


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <a href="./index.html">
                    <img
                        src={logo}
                        alt="Logo de la página"
                        title="Logo de la página"
                        className="header__img"
                    />
                </a>
            </header>);
    }
}

export default Header; 