import React from 'react';

import Experience from './experience.jsx';

module.exports = function ExperienceList (props) {

    return props.experiences.map( (experience) => 
        <Experience {...experience} />
    );

}