import React from 'react';

import Skill from './skill.jsx';

module.exports = function SkillList (props) {

    return props.skills.map(
        skill => (<Skill {...skill} />)
    );
    
}