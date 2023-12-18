import React, {ChangeEvent} from 'react';
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./profileStatus/ProfileStatus";
import userPhoto from '../../../assets/avatar-user.png'
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(photo:File) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event:ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files?.length){
            props.savePhoto(event.target.files[0])
        }
    }

    return (
        <>
            <div>
                <img className={s.mainPhoto} src={props.profile.photos.large || userPhoto} alt={'avatar'}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}
                />
                <div>
                    Contacts : {props.profile.contacts.facebook}
                </div>
            </div>
        </>

    );
};
