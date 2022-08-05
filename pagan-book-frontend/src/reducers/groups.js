const groupsReducer = (state = { groups: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_GROUPS':
            return {
                ...state,
                groups: [...state.groups],
                loading: true
            }

        case 'ADD_GROUPS':
            return {
                ...state,
                groups: action.groups,
                loading: false
            }

        case 'ADD_NEW_GROUP':
            return {
                ...state,
                groups: [...state.groups, action.payload],
                loading: false
            }

        case 'REMOVE_GROUP':
            return {
                ...state,
                groups: state.groups.filter(group => group.id !== action.id),
                loading: false
            }

        default:
            return state;
    }
}

export default groupsReducer
