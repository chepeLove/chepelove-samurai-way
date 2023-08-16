import React from 'react';
import style from './Sidebar.module.css'
export const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <div className={style.item}>
                <a href={"#"}>Profile</a>
            </div>
            <div className={style.item}>
                <a href={"#"}>Messages</a>
            </div>
            <div className={style.item}>
                <a href={"#"}>News</a>
            </div>
            <div className={style.item}>
                <a href={"#"}>Music</a>
            </div>
            <div className={style.item}>
                <a href={"#"}>Setting</a>
            </div>
        </nav>
    );
};