import React, {Component} from 'react';

export default class GroupCard extends Component {

  render() {
    return (
      <div className="post-card col-md-12 col-lg-6">
        <h3>{this.props.group.name}</h3><hr/>
        <button onClick={() => {this.props.removeGroup(this.props.group.id)}} >Delete</button>
      </div>
    )
  }
}
