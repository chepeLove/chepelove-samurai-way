import React, {FC} from 'react';
import s from './ProfileContacts.module.css'

type ProfileContactsType = {
    contactValue:string | null |  undefined
    contactTitle:string | null
}

export const ProfileContacts:FC<ProfileContactsType> = ({contactValue,contactTitle}) => {
    return (
        <div>
            <b className={s.contact}>{contactTitle}</b> : {contactValue ? contactValue : ''}
        </div>
    );
};
