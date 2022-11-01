import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/reduxStore";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: undefined | string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: undefined | string) => void
    getStatus: (userId: undefined | string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

type PathParamsType = {
    userId: string | undefined
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<ProfileContainerType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)