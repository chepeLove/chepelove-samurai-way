import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, getUserStatusTC, UserProfileType,updateUserStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId ?? ''
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus = {this.props.updateUserStatusTC}
            />
        );
    }
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string,
}

type MapStateToPropsType = {
    profile: UserProfileType | null
    status:string
    authorizedUserId:string | null
    isAuth:boolean
}

type MapDispatchToProps = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status:string) => void

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId:state.auth.id,
        isAuth:state.auth.isAuth
    }
}

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC
    }),
    withRouter,
    withAuthRedirectComponent
    )(ProfileContainer)

// export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent)
