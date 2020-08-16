import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups, addGroup, removeGroup } from '../actions/groups';
import GroupForm from '../components/GroupForm';
import GroupsContainer from './GroupsContainer';

import '../Groups.css';

class Groups extends Component {

    componentDidMount() {
        this.props.fetchGroups(this.props.match.url)
    }

    render() {
        return (
            <div>
                <GroupForm addGroup={this.props.addGroup} />
                <GroupsContainer groups={this.props.groups.filter(group => group.id !== 1)} removeGroup={this.props.removeGroup}/>
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
        fetchGroups: url => dispatch(fetchGroups(url)),
        addGroup: payload => dispatch(addGroup(payload)),
        removeGroup: id => dispatch(removeGroup(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Groups)
