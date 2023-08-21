import React from 'react';
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemsPropsType = {
    name:string
    id:string
}
export const DialogsItems = (props:DialogsItemsPropsType) => {
    return (
            <div className={style.item}>
                <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>{props.name}</NavLink>
            </div>
    );
};

