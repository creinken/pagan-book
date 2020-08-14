import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups, addGroups } from '../actions/groups';

import '../Groups.css';

class Groups extends Component {

    render() {
        return (
            <div>
                Groups
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        groups: state.groupsReducer.groups
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: () => dispatch(fetchGroups()),
        addGroup: payload => dispatch(addGroup(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Groups)
