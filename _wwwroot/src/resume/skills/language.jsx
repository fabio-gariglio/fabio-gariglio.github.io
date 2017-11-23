import React from 'react';

import style from './skill.scss';

module.exports = function Language (props) {

    return (
        <div>
            <p className={style.name}>{props.name}</p>
            <p className={style.level}>{props.level} proficiency</p>
        </div>
    );
}