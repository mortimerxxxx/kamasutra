import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (

        <div className={s.content}>
            <div>
                <img src="https://demotivation.ru/wp-content/uploads/2020/01/topoboi.com-40187.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo