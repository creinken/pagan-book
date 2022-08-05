const serverURL = 'http://localhost:5000';

export const removeGroup = id => {
    return (dispatch) => {
        fetch(`${serverURL}/groups/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(json => console.log(json.message))
        .then(post =>
            dispatch({ type: 'REMOVE_GROUP', id})
        );
    };
}

export const fetchGroups = url => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_GROUPS'})
        fetch(`${serverURL}${url}`)
        .then(res => { return res.json()})
        .then(json => {
            dispatch({ type: 'ADD_GROUPS', groups: json })
        })
    }
}

export const addGroup = payload => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_GROUPS'})
        fetch(`${serverURL}/groups`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ group: payload})
        })
        .then(res => { return res.json()})
        .then(json => {
            console.log(json.message);
            dispatch({ type: 'ADD_NEW_GROUP', payload: json.group })
        })
    }
}
