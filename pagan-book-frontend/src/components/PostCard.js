import React, {Component} from 'react';

export default class PostCard extends Component {

  render() {
    return (
      <div className="post-card col-md-12 col-lg-6">
        <h3>{this.props.post.title}</h3><hr/>
        <h4>{this.props.post.author}</h4>
        <p>{this.props.post.group_id}</p>
        <p>{this.props.post.content}</p>
        <button onClick={() => {this.props.removePost(this.props.post.id)}} >Delete</button>
      </div>
    )
  }
}
