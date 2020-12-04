import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://demotivation.ru/wp-content/uploads/2020/01/topoboi.com-40187.jpg" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile