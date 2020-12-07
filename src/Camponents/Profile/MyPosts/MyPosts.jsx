import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) => {

    let postElements = props.postData
        .map( p => <Post message={p.message} likeCount={p.likeCount}/>);

    return (
        <div className={s.content}>
            <div className={s.inputBtn}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Добавить новый пост</button>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts