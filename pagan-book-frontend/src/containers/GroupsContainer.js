import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupCard from '../components/GroupCard';
import { removeGroup } from '../actions/groups';

class GroupsContainer extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Groups</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
               { this.props.groups.map(groupObj => { return <GroupCard group={groupObj} removeGroup={this.props.removeGroup} /> } ) }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return { groups: state.groupsReducer.groups }
}

const mapDispatchToProps = dispatch => {
  return {
    removeGroup: (id) => {
      dispatch(removeGroup(id))
    }
  };
};

//add arguments to connect as needed
export default connect(mapStateToProps,mapDispatchToProps)(GroupsContainer);
