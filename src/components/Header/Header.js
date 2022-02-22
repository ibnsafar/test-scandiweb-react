import React from "react";
import {Link} from "react-router-dom";
import "./css/header.css";

const Logo = require('./img/logo.png');

class Header extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"container-link"}>
                    <Link className={"link current"} to={"#"}>WOMEN</Link>
                    <Link className={"link"} to={"#"}>MEN</Link>
                    <Link className={"link"} to={"#"}>KIDS</Link>
                </div>
                <div>
                    <Link to={"/"}>
                        <img className={'logo'} src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div>
                    <div className={"currencies"}>
                        <p>$</p>
                        <img src="./img/vector.png" alt=""/>
                    </div>
                    <p>$</p>
                </div>
            </div>
        )
    }
}

export default Header;