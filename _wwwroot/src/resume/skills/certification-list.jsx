import React from 'react';

import Certification from './certification.jsx';

module.exports = function CertificationList (props) {

    return props.certifications.map(
        certification => (<Certification {...certification} />)
    );

}