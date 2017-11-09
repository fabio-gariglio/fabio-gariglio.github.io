import React from 'react';

import ExperiencePeriod from './experiencePeriod.jsx';

module.exports = function Experience (props) {
    return (
    <div>
        <div>
            <ExperiencePeriod from={props.from} to={props.to} />
        </div>
        <div>
            <p>{props.title}</p>
            <p>{props.company}, {props.city}, {props.country}</p>
            <p>{props.description}</p>
        </div>
    </div>);
}