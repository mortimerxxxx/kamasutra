import React from 'react';
import s from "./Music.module.css";

const Music = (props) => {
    return (
        <div className={s.music}>
            <div>
                <p>Скачате ваши нелюбимы треки</p>
                <a href="https://zaycev.net/musicset/dl/3073efe6bc3c23739b508971c08e8b7b/22427920.json?spa=false">Анет Сай
                    –
                    СЛЁЗЫ</a><br/>
                <a href="https://zaycev.net/musicset/dl/69220660860e2a5d0b700a8e47411662/8900323.json?spa=false">Insidious One
                    –
                    Ваша Честь</a><br/>
                <a href="https://zaycev.net/musicset/dl/2eab1fcfdc40e71ceafe67784f0db3aa/21805452.json?spa=false">Wolfkrieg
                    –
                    Eternal War</a>
            </div>

        </div>
    )
}

export default Music;