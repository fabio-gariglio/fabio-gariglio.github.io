import React from 'react';

module.exports = function Language (props) {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.level} proficiency</p>
        </div>
    );
}