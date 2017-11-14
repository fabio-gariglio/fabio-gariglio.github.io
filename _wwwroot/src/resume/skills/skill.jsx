import React from 'react';

module.exports = function Skill (props) {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.level} knowledge</p>
        </div>
    );
}