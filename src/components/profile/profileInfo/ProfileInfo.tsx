import React from 'react';
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type ProfileInfoType = {
    profile:UserProfileType | null
}

export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <>
            {/*<div>*/}
            {/*    <img src='https://www.seekpng.com/png/detail/268-2682643_image-illustrating-a-social-media-network-social-media.png' alt='avatar user'/>*/}
            {/*</div>*/}
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : ''} alt={'avatar'}/>
            </div>
            <ProfileStatus status={props.profile.aboutMe}/>
            <div>
                Contacts : {props.profile.contacts.facebook}
            </div>
        </>

    );
};
