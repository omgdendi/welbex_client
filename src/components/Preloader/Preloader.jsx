import React from "react";
import preloader from "../../assects/preloader.gif";
import styles from "./Preloader.module.scss";

const Preloader = (props) => {
    return (
        <div className={styles.content}>
            <img src={preloader} alt="загрузка"/>
            <div className={styles.text}>Загрузка...</div>
        </div>
    )
}

export default Preloader;