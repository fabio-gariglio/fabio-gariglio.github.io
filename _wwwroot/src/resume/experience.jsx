import React from 'react';

module.exports = function Experience (props) {
    return (
    <div>
        <strong>{props.title}</strong>
        <p>{props.company}, {props.city}, {props.country}</p>
    </div>);
}