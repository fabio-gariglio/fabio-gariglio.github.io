import React from 'react';

import Experience from './experience.jsx';

module.exports = function ExperienceList (props) {

    if (!props.experiences) return ("<div />");

    return props.experiences.map( (experience) => 
        <Experience {...experience} />
    );

}