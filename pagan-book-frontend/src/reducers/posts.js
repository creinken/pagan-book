const postsReducer = (state = { posts: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_POSTS':
            return {
                ...state,
                posts: [...state.posts],
                loading: true
            }

        case 'ADD_POSTS':
            return {
                ...state,
                posts: action.posts,
                loading: false
            }

        default:
            return state;
    }
}

export default postsReducer
