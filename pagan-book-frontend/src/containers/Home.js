import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, addPost } from '../actions/posts';
import PostsContainer from './PostsContainer';
import PostForm from '../components/PostForm';
import '../Home.css';

class Home extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                Home
                <PostForm addPost={this.props.addPost} />
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
        fetchPosts: () => dispatch(fetchPosts()),
        addPost: payload => dispatch(addPost(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
