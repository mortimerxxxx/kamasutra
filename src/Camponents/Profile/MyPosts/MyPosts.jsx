import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Добавить новый пост</button>
            </div>
            <div className={s.posts}>
                <Post message="Привет! Я сделал свой первый пост через реакт" likeCount="15"/>
            </div>

        </div>
    )
}

export default MyPosts