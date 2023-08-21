import React from 'react';
import style from './Dialogs.module.css'

import {DialogsItems} from "./DialogsItems";
import {Message} from "./Message";


export const Dialogs = () => {
    return (
        <>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <DialogsItems name ={'Dima'} id = '1'/>
                    <DialogsItems name ={'Kiril'} id = '2'/>
                    <DialogsItems name ={'Mark'} id = '3'/>
                    <DialogsItems name ={'Sasha'} id = '4'/>
                    <DialogsItems name ={'Vova'} id = '5'/>
                </div>
                <div className={style.messages}>
                    <Message message={'Hi'}/>
                    <Message message={'welcome'}/>
                    <Message message={'what'}/>
                </div>
            </div>
        </>

    );
};

