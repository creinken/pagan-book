import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostsContainer from './PostsContainer'

class Home extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                Home
                <PostsContainer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(null,mapDispatchToProps)(Home)
