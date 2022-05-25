import React, {useState} from "react";
import AuthFormContainer from "./AuthForm/AuthFormContainer";
import styles from "./AuthContent.module.scss";

const AuthContent = () => {
    const [isRegister, setRegister] = useState(false);

    return (
        <div className={isRegister ? styles.registerMainContent : styles.mainContent}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionHeader__name}>{isRegister ? 'Зарегистрируйтесь' : 'Войдите в систему'}</span>
            </div>
            <AuthFormContainer isRegister={isRegister} setRegister={setRegister}/>
        </div>
    )
}

export default AuthContent;