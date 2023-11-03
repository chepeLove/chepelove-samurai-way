import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC,UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : '2'
        this.props.getUserProfileTC(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
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
    getUserProfileTC: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    withAuthRedirectComponent
    )(ProfileContainer)

// export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent)
