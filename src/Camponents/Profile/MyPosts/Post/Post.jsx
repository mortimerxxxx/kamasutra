import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatarPost}>
                <img src="https://images.i.thechive.com/profile_image/a9ce0192e890056fd205a8d3e1f3983a.png" alt=""/>
                {props.message}
            </div>
            <div className={s.like}>
                <span>Like</span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post