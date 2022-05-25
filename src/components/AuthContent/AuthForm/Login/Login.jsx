import React, {useState} from "react";
import styles from "../AuthForm.module.scss";
import {Link} from "react-router-dom";

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const toRegister = () => {
        props.setRegister(true);
        props.setErrorMessage(null);
    }

    return (
        <div className={styles.content}>
            <div className={styles.messageContainer}>
                <span className={styles.message}>
                    {props.errorMessage}
                </span>
            </div>
            <div className={styles.inputSection}>
                <div className={styles.labelContainer}>
                    <label htmlFor="login">Введите логин</label>
                </div>
                <input
                    type="text"
                    onChange={e => setLogin(e.target.value)}
                    id={'login'}
                    value={login}
                    placeholder={"Логин"}
                />
                <div className={styles.labelContainer}>
                    <label htmlFor="password">Введите пароль</label>
                </div>
                <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    id={'password'}
                    value={password}
                    placeholder={"Пароль"}
                />
            </div>
            <div className={styles.actions}>
                 <span className={styles.link} onClick={toRegister}>
                     <Link to="/api/registration">Нет аккаунта?</Link>
                 </span>
                <Link to={"/api/main"}>
                    <button onClick={() => props.login(login, password)}>Войти</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;