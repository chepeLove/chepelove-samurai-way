import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile,UserProfileType} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render(){
        return (
            <Profile profile = {this.props.profile} />
        );
    }

}

type ProfileContainerType = mapStateToPropsType & mapDispatchToProps

type mapStateToPropsType = {
    profile: UserProfileType | null
}

type mapDispatchToProps = {
    setUserProfile:(profile: UserProfileType) => void
}

const mapStateToProps = (state:AppStateType):mapStateToPropsType =>{
    return{
        profile:state.profilePage.profile
    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)
