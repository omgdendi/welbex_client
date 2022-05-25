import React from 'react';
import styles from "./Dialog.module.scss";
import BlogFormContainer from "./BlogForm/BlogFormContainer";

const Dialog = (props) => {

    const hideDialog = (e) => {
        if (e.target === e.currentTarget) {
            props.setShowDialog(false);
            props.resetSettings();
        }
    }

    return (
        <div className={styles.dialog} onClick={(e) => hideDialog(e)}>
            <div className={styles.dialog__content}>
                <BlogFormContainer/>
            </div>
        </div>
    );
};

export default Dialog;