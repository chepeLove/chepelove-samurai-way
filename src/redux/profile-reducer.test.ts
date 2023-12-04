import {addPost, deletePost, InitialProfileStateType, ProfileReducer} from "./profile-reducer";


const state : InitialProfileStateType = {
    posts: [
        {post: 'Hi', id: '1', likeCount: '10'},
        {post: 'Hi, how are you ?', id: '2', likeCount: '20'},
        {post: 'It\'s my first post?', id: '3', likeCount: '30'},
        {post: 'Hello', id: '4', likeCount: '40'},
        {post: 'qq', id: '5', likeCount: '50'},
    ],
    profile:null,
    status:''
}

it('new post should be add',() => {
    //1. test data
    let action = addPost('new post text')
    //2. action
    let newState = ProfileReducer(state,action);

    //3. expectation

    expect(newState.posts.length).toBe(6)
})

it('new post message should be correct',() => {
    //1. test data
    let action = addPost('new post text')
    //2. action
    let newState = ProfileReducer(state,action);

    //3. expectation

    expect(newState.posts[5].post).toBe('new post text')
})

it('after deleting length of messages should be decrement',() => {
    //1. test data
    let action = deletePost('3')
    //2. action
    let newState = ProfileReducer(state,action);

    //3. expectation

    expect(newState.posts.length).toBe(4)
})