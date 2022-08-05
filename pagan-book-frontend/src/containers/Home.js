import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';
import PostsContainer from './PostsContainer';
import PostForm from '../components/PostForm';
import '../Home.css';

class Home extends Component {

    render() {
        return (
            <div>
                Home
                <PostForm addPost={this.props.addPost} />
                <PostsContainer url='/groups/1/posts'/>
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
        addPost: payload => dispatch(addPost(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
