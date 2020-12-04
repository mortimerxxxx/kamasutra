import React from 'react';
import s from "./Settings.module.css";

const Settings = (props) => {
    return (
        <div className={s.settings}>
            <a href="">Настройки профиля</a>
            <a href="">Настройки аватарки</a>
            <a href="">Настройки сообщений</a>
            <a href="">Настройки психики</a>
            <a href="">Настройка личной жизни</a>
        </div>
    )
}

export default Settings;