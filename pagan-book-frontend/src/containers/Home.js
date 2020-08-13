import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostsContainer from './PostsContainer';
import '../Home.css';

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

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
