import React from 'react';
import { Link } from 'react-router-dom';

const GroupCard = (props) => {

    return (
      <div className="post-card col-md-12 col-lg-6">
        <h3><Link key={props.group.id} to={`/groups/${props.group.id}`} >{props.group.name}</Link></h3>
      </div>
  );
};

export default GroupCard;
