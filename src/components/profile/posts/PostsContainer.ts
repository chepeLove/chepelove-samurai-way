import {addPost, postsType} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts:postsType[]
}

type mapDispatchToProps = {
    addPost:(newPostText:string)=>void
}

export type PostsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        posts:state.profilePage.posts,
    }
}

export const PostsContainer = connect(mapStateToProps, {addPost})(Posts)
