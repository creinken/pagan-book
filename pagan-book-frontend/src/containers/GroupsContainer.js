import React from 'react';
import GroupCard from '../components/GroupCard';

const GroupsContainer = (props) => (

    <div>
        <hr />
        <div className="row justify-content-center">
            <h3>Groups</h3>
        </div>
        <hr />
        <div className="container">
            <div className="row">
                { props.groups.map(groupObj => { return <GroupCard group={groupObj} /> } ) }
            </div>
        </div>
    </div>
)

//add arguments to connect as needed
export default GroupsContainer
