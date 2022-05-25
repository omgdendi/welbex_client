import React, {useState} from 'react';
import BlogListContainer from "./BlogList/BlogListContainer";
import styles from "./MainContent.module.scss";
import Dialog from "./Dialog/Dialog";
import DialogContainer from "./Dialog/DialogContainer";

const MainContent = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <div className={styles.create} onClick={() => props.setShowDialog(true)}>Создать пост</div>
            </div>
            {props.isShowDialog ? <DialogContainer /> : null}
            <BlogListContainer/>
        </div>
    );
};

export default MainContent;