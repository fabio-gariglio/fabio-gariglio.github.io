import React from 'react';

import Skill from './skill.jsx';

module.exports = function SkillList (props) {

    var skills = props.skills.map(
        skill => (<Skill {...skill} />)
    );

    return (
        <div>
            <p>Skills</p>
            <div>
                {skills}
            </div>                        
        </div>
    );
}