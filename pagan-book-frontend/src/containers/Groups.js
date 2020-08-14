import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups, addGroup } from '../actions/groups';
import GroupForm from '../components/GroupForm';
import GroupsContainer from './GroupsContainer';

import '../Groups.css';

class Groups extends Component {

    componentDidMount() {
        this.props.fetchGroups()
    }

    render() {
        return (
            <div>
                <GroupForm addGroup={this.props.addGroup} />
                <GroupsContainer />
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
