import React from 'react';
import GroupCard from '../components/GroupCard';
import { Route } from 'react-router-dom';

const GroupsContainer = (props) => (

    <div>
        <Route exact path={props.match.url} render={() => (
                <>
                    <hr />
                    <div className="row justify-content-center">
                        <h3>Groups</h3>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row">
                            { props.groups.map(groupObj => { return <GroupCard match={props.match} group={groupObj} removeGroup={props.removeGroup} /> } ) }
                        </div>
                    </div>
                </>
            )}
        />
    </div>
    )

    //add arguments to connect as needed
    export default GroupsContainer
