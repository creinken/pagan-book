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

        case 'ADD_NEW_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload],
                loading: false
            }

        case 'REMOVE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id),
                loading: false
            }

        default:
            return state;
    }
}

export default postsReducer
