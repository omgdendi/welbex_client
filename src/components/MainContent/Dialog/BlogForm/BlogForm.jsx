import React, {useState} from 'react';
import styles from "./BlogForm.module.scss";

const BlogForm = (props) => {
    const isSettings = props.isOpenSettings;
    const [message, setMessage] = useState(props.currentMessage);
    const [imgFile, setImgFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const addBlog = () => {
        const formData = new FormData();
        if (message) {
            formData.append("message", message);
        }
        if (imgFile) {
            formData.append("img", imgFile);
        }
        if (videoFile) {
            formData.append("video", videoFile);
        }
        if (isSettings) {
            props.updateBlog(formData, props.currentId);
            props.resetSettings()
        } else {
            props.addNewBlog(formData);
        }
        props.setShowDialog(false);
    }

    return (
        <div className={styles.post}>
            <div className={styles.textarea}>
                <textarea name="message" cols="30" rows="10" value={message}
                          onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
            </div>
            <div className={styles.imageSection}>
                <div className={styles.name}>
                    <span>Добавьте картинку</span>
                </div>
                <input type="file" name={"img"} onChange={(e) => setImgFile(e.target.files[0])}/>
            </div>
            <div className={styles.videoSection}>
                <div className={styles.name}>
                    <span>Добавьте видео</span>
                </div>
                <input type="file" name={"video"} onChange={(e) => setVideoFile(e.target.files[0])}/>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.create} onClick={() => addBlog()}>
                    <span>{isSettings ? "Обновить" : "Создать"}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogForm;