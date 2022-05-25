import React from "react";
import styles from "./AuthForm.module.scss";
import LoginContainer from "./Login/LoginContainer";
import RegisterContainer from "./Register/RegisterContainer";

const AuthForm = (props) => {
    return (
        <div className={styles.content}>
            {props.isRegister
                ? <RegisterContainer setRegister={props.setRegister}/>
                : <LoginContainer isRegister={props.isRegister} setRegister={props.setRegister}/>
            }
        </div>
    )
}

export default AuthForm;