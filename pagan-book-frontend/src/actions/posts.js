const serverURL = 'http://localhost:5000';

export const removePost = id => {
    return (dispatch) => {
        fetch(`${serverURL}/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(json => console.log(json.message))
        .then(post =>
            dispatch({ type: 'REMOVE_POST', id})
        );
    };
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_POSTS'})
        fetch(`${serverURL}/posts`)
        .then(res => { return res.json()})
        .then(json => {
            dispatch({ type: 'ADD_POSTS', posts: json })
        })
    }
}

export const addPost = payload => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_POSTS'})
        fetch(`${serverURL}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ post: payload})
        })
    }
}
