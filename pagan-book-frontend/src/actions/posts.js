const serverURL = 'http://localhost:5000';

export const removePost = id => {
    return { type: 'REMOVE_POST', id}
}

export const fetchPosts = () => {
    return (dispatch) => {
        console.log(`${serverURL} + '/posts'`);
        dispatch({ type: 'LOADING_POSTS'})
        fetch(`${serverURL}/posts`)
        .then(res => { return res.json()})
        .then(json => {
            dispatch({ type: 'ADD_POSTS', posts: json })
        })
    }
}
