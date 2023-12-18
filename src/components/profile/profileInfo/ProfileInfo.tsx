import React, {ChangeEvent, useState} from 'react';
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./profileStatus/ProfileStatus";
import userPhoto from '../../../assets/avatar-user.png'
import s from './ProfileInfo.module.css'
import {ProfileData} from "./profileData/ProfileData";
import {ProfileDataReduxForm, ProfileDataType} from "./profileData/ProfileDataForm";

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (newProfileData: ProfileDataType) => Promise<UserProfileType>
}

export const ProfileInfo = (props: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            props.savePhoto(event.target.files[0])
        }
    }
    const onSubmit = (formData: ProfileDataType) => {
     props.saveProfile(formData).then(()=>{
         setEditMode(false)
     })

    }

    return (
        <>
            <div>
                <img className={s.mainPhoto} src={props.profile.photos.large || userPhoto} alt={'avatar'}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}
                />
                {editMode ? <ProfileDataReduxForm initialValues={props.profile}
                                                  onSubmit={onSubmit}
                                                  profile={props.profile}
                    /> :
                    <ProfileData profile={props.profile}
                                 isOwner={props.isOwner}
                                 goToEditMode={() => {
                                     setEditMode(true)
                                 }}/>}
            </div>
        </>

    );
};
