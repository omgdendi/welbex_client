import React, {useState} from "react";
import styles from "../AuthForm.module.scss";
import {Link} from "react-router-dom";

const validate = (login, password, repeatPassword) => {
    if (!login) {
        return 'Логин не может быть пустым';
    }
    if (password < 3) {
        return 'Длина пароля не может быть меньше 3 символов';
    }
    if (password !== repeatPassword) {
        return 'Пароли не совпадают';
    }
    return null
}


const Register = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const registration = () => {
        const message = validate(login, password, repeatPassword);
        if (message) {
            props.setErrorMessage(message);
        } else {
            props.registration(login, password);
        }
    }

    const toLogin = () => {
        props.setRegister(false);
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
                <div className={styles.labelContainer}>
                    <label htmlFor="repeatPassword">Повторите пароль</label>
                </div>
                <input
                    type="password"
                    onChange={e => setRepeatPassword(e.target.value)}
                    id={'repeatPassword'}
                    value={repeatPassword}
                    placeholder={"Повторный пароль"}
                />
            </div>
            <div className={styles.actions}>
                <span className={styles.link} onClick={toLogin}>
                    <Link to="/web-lab/login">
                        Есть аккаунт?
                    </Link>
                </span>
                <button onClick={() => registration()} className={styles.register}>Регистрация</button>
            </div>
        </div>
    )
}

export default Register;