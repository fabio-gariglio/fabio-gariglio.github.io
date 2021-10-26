import React from 'react';

import ExperiencePeriod from './experience-period.jsx';
import styles from './experience.scss';

module.exports = function Experience (props) {

    var description = props.description
        .split('\n')
        .map(paragraph => (<p>- {paragraph}</p>));

    return (
    <div className={styles.experience}>
        <div className={styles.period}>
            <ExperiencePeriod from={props.from} to={props.to} />
        </div>
        <div className={styles.details}>
            <p className={styles.company}>{props.company}, {props.city}, {props.country}</p>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.description}>{description}</div>
        </div>
    </div>);
}