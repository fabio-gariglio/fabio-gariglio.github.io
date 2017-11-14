import React from 'react';

import Certification from './certification.jsx';

import style from './skill.css';

module.exports = function LanguageList (props) {

    var logos = props.certifications.map(
        certification => <img className={style.logo} src={certification.logo} />
    );

    var certifications = props.certifications.map(
        certification => (<Certification {...certification} />)
    );

    return (
        <div>
            <div>
                {logos}
            </div>
            <p>Certifications</p>
            <div>
                {certifications}
            </div>
        </div>
    );
}