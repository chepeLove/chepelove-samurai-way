import {addPost, postsType, updateNewPost} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts:postsType[]
    newPostText:string
}

type mapDispatchToProps = {
    updateNewPost:(newPostText:string) => void
    addPost:()=>void
}

export type PostsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
//     return{
//         updateNewPostText:(newPostText:string) => {
//             dispatch(updateNewPost(newPostText))
//         },
//         addPost:() => {
//             dispatch(addPost())
//         }
//     }
// }

export const PostsContainer = connect(mapStateToProps, {updateNewPost, addPost})(Posts)
