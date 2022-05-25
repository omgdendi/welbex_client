import React, {useEffect, useState} from 'react';
import {AppAPI} from "../../../../api/AppAPI";
import styles from "./Blog.module.scss";
import basket from "../../../../assects/basket.png";
import settings from "../../../../assects/settings.png";

const Blog = (props) => {
    const [username, setUsername] = useState(null);

    let [day, time] = props.createdAt.split("T");
    time = time.split(".")[0];
    const createdAt = day + " " + time;

    useEffect(() => {
        AppAPI.getUser(props.userId).then(response => {
            setUsername(response.data.username);
        })
    }, [])

    const deleteBlog = () => {
        props.deleteBlog(props.id);
    }

    const openSettingsBlog = () => {
        props.setShowDialog(true);
        props.setCurrentMessage(props.message);
        props.setOpenSettings(true);
        props.setCurrentId(props.id);
    }

    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <div>
                    <span>{username}</span>
                </div>
                <div className={styles.rightSection}>
                    <span>{createdAt}</span>
                    <img style={props.isMyBlog ? null : {display: "none"}}
                         onClick={() => openSettingsBlog()}
                         src={settings} alt="Blog settings"/>
                    <img style={props.isMyBlog ? null : {display: "none"}}
                         onClick={() => deleteBlog()}
                         src={basket} alt="delete basket"/>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.message} style={props.message ? {display: "block"} : {display: "none"}}>
                    <span>{props.message}</span>
                </div>
                {props.img
                    ? <div className={styles.img}>
                        <img src={"http://localhost:8080/" + props.img} alt="image"/>
                    </div>
                    : null
                }
                {props.video
                    ? <video className={styles.video} width={300}>
                        <source src={"http://localhost:8080/" + props.video} type="video/mp4"/>
                    </video>
                    : null
                }

            </div>
        </div>
    );
};

export default Blog;