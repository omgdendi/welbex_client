import React from 'react';
import Blog from "./Blog/Blog";
import styles from "./BlogList.module.scss";

const BlogList = (props) => {
    return (
        <section>
            <div>
                <div className={styles.name}>
                    <span>Мои посты</span>
                </div>
                {props.blogs
                    .filter(blog => blog.author === props.user.id).reverse().map(blog => <Blog key={blog.id}
                                                                                         id={blog.id}
                                                                                         message={blog?.message}
                                                                                         createdAt={blog.createdAt}
                                                                                         userId={blog.author}
                                                                                         img={blog.img}
                                                                                         video={blog.video}
                                                                                         deleteBlog={props.deleteBlog}
                                                                                         setShowDialog={props.setShowDialog}
                                                                                         setOpenSettings={props.setOpenSettings}
                                                                                         setCurrentMessage={props.setCurrentMessage}
                                                                                         setCurrentId={props.setCurrentId}
                                                                                         isMyBlog={true}
                />)}
            </div>
            <div>
                <div className={styles.name}>
                    <span>Чужие посты</span>
                </div>
                {props.blogs.filter(blog => blog.author !== props.user.id).reverse().map(blog => <Blog key={blog.id}
                                                                                         id={blog.id}
                                                                                         message={blog.message}
                                                                                         createdAt={blog.createdAt}
                                                                                         userId={blog.author}
                                                                                         img={blog.img}
                                                                                         video={blog.video}
                                                                                         isMyBlog={false}
                />)}
            </div>
        </section>
    );
};

export default BlogList;