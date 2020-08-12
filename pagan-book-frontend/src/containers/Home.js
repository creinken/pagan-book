import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostsContainer from './PostsContainer'

class Home extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchPosts()
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Home
                <PostsContainer posts={this.props.posts} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
