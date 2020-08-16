import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { removePost, fetchPosts } from '../actions/posts';

class PostsContainer extends Component {

    componentDidMount() {
        if (this.props.url)
            this.props.fetchPosts(this.props.url)
        else {
            console.log(this.props.match.url);
            this.props.fetchPosts(this.props.match.url)
        }
    }

    render() {
        return (
            <div>
                <hr />
                <div className="row justify-content-center">
                    <h2>Posts</h2>
                </div>
                <hr />
                <div className="container">
                    <div className="row">
                        { this.props.posts.map(postObj => { return <PostCard post={postObj} removePost={this.props.removePost} /> } ) }
                        </div>
                    </div>
                </div>
            );
        }
    }

    const mapStateToProps = state => {
        return { posts: state.postsReducer.posts }
    }

    const mapDispatchToProps = dispatch => {
        return {
            fetchPosts: (url) => dispatch(fetchPosts(url)),
            removePost: (id) => {
                dispatch(removePost(id))
            }
        };
    };

    //add arguments to connect as needed
    export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer);
