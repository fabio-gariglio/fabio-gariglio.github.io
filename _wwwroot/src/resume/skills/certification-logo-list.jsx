import React from 'react';

import style from './skill.scss';

module.exports = function CertificationLogoList (props) {

    return props.certifications.map(
            certification => 
                <div className="col text-center">
                    <img className={style.logo} src={certification.logo} />
                </div>
        );
}