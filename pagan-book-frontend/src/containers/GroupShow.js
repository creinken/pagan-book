import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeGroup, fetchGroups } from '../actions/groups';
import { Route, Link } from 'react-router-dom';
import PostsContainer from './PostsContainer';

class GroupShow extends Component {

    componentDidMount() {
        this.props.fetchGroups(this.props.match.url)
    }

    render() {
        return (
            <>
                <Route path={`/groups/:groupId`} render={ () => {
                        return (
                            <div className='container'>
                                <h3>{this.props.groups.name}</h3><button onClick={() => {this.props.removeGroup(this.props.groups.id)}} >Delete Group</button>
                                <p>{this.props.groups.description}</p>
                            </div>
                        );
                    }}
                />
                <Link to={`/groups/${this.props.groups.id}/posts`} >View Feed</Link>
                <Route
                    exact
                    path={`/groups/:groupId/posts`}
                    render={ routerProps =>
                        <PostsContainer {...routerProps} /> }
                />
            </>
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
        fetchGroups: (url) => dispatch(fetchGroups(url)),
        removeGroup: (id) => dispatch(removeGroup(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupShow)
