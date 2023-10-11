import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile,UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string,
}

type MapStateToPropsType = {
    profile: UserProfileType | null
}

type MapDispatchToProps = {
    setUserProfile:(profile: UserProfileType) => void
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>{
    return{
        profile:state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)