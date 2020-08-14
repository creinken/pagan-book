import React from 'react';

const GroupShow = ({match, groups}) => {
    return (
        <div>
            <h3>{match.params.groupId}</h3>
        </div>
    )
}

export default GroupShow
