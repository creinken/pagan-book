import React from 'react';
import { Link } from 'react-router-dom';

const GroupCard = ({match, group, removeGroup}) => {

    return (
      <div className="post-card col-md-12 col-lg-6">
        <h3><Link key={group.id} to={`${match.url}/${group.id}`} >{group.name}</Link></h3><hr/>
        <button onClick={() => {removeGroup(group.id)}} >Delete</button>
      </div>
  );
};

export default GroupCard;
