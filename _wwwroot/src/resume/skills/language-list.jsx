import React from 'react';

import Language from './language.jsx';

module.exports = function LanguageList (props) {

    var languages = props.languages.map(
        language => (<Language {...language} />)
    );

    return (
        <div>
            <p>Languages</p>
            <div>
                {languages}
            </div>
        </div>
    );
}