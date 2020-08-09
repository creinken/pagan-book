import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { removePost } from '../actions/posts';

class PostsContainer extends Component {

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
            <div className="col-md-4">
               {this.props.posts.map(postObj => { return <PostCard post={postObj} removePost={this.props.removePost} /> } ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (id) => {
      dispatch(removePost(id))
    }
  };
};

//add arguments to connect as needed
export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer);
