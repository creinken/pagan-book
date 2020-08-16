import React from 'react';
import { Route } from 'react-router-dom';
import PostsContainer from './PostsContainer';

const GroupShow = ({match, groups}) => {
    const group = groups.filter(group => group.id === parseInt(match.params.groupId))[0];

    return (
        <>
            <Route exact path={`/groups/:groupId`} render={ () => {
                    return (
                        <div className='container'>
                            <h3>{group.name}</h3>
                            <p>{group.description}</p>
                        </div>
                    );
                }}
            />
            <Route
                exact
                path={`/groups/:groupId/index`}
                render={ routerProps =>
                    <PostsContainer {...routerProps} /> }
            />
        </>
    )
}

export default GroupShow
