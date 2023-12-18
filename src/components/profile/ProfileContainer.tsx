import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserProfileTC,
    getUserStatusTC,
    UserProfileType,
    updateUserStatusTC,
    savePhotoTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile (){
        let userId = this.props.match.params.userId;
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId
        }
        if (!userId){
            this.props.history.push('/login')
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus = {this.props.updateUserStatusTC}
                     isOwner = {!this.props.match.params.userId}
                     savePhoto = {this.props.savePhotoTC}
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
    savePhotoTC:(photo:File) => string

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
        updateUserStatusTC,
        savePhotoTC
    }),
    withRouter,
    withAuthRedirectComponent
    )(ProfileContainer)

// export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent)
