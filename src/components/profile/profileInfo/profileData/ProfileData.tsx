import React, {FC} from 'react';
import {ProfileContacts} from "./profileContacts/ProfileContacts";
import {UserProfileType} from "../../../../redux/profile-reducer";

type ProfileDataType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode:()=>void
}

export const ProfileData:FC<ProfileDataType> = ({profile,isOwner,goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
            <div>
                <b>Full name</b>:{profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>:{profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {profile.lookingForAJob && <div>
              <b>My professional skills</b>:{profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>:{profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map((contactTitle,index)=>{
                const key = contactTitle as keyof typeof profile.contacts;
                return <ProfileContacts key={index} contactTitle={key} contactValue={profile?.contacts[key]}/>
            })}
            </div>
        </div>
    );
};
