import React from "react";
import styles from "./Header.module.scss";
import exit from "../../assects/exit.png";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <Link to={"/web-lab/login"}>
                <img style={props.isAuth ? {display: "block"} : {display: "none"}} src={exit}
                     onClick={() => props.logout()} className={styles.exit} alt="exit"/>
            </Link>
            <span className={props.isAuth ? styles.name : styles.nameWithoutAuth}>
                Тестовое задание для WelbeX
            </span>
        </header>
    );
}

export default Header;



