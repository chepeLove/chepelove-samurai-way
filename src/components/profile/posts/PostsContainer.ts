import {addPostActionCreator, postsType, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts:postsType[]
    newPostText:string
}

type mapDispatchToProps = {
    updateNewPostText:(newPostText:string) => void
    addPost:()=>void
}

export type PostsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return{
        updateNewPostText:(newPostText:string) => {
            dispatch(updateNewPostActionCreator(newPostText))
        },
        addPost:() => {
            dispatch(addPostActionCreator())
        }
    }
}

export const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
