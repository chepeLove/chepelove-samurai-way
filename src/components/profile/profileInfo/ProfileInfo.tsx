import React from 'react';
import {UserProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profile:UserProfileType | null
}

export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <>
            <div>
                <img src='https://www.seekpng.com/png/detail/268-2682643_image-illustrating-a-social-media-network-social-media.png' alt='avatar user'/>
            </div>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : ''} alt={'avatar'}/>
            </div>
            <div>
                About me : {props.profile.aboutMe}
            </div>
            <div>
                Contacts : {props.profile.contacts.facebook}
            </div>
        </>

    );
};
