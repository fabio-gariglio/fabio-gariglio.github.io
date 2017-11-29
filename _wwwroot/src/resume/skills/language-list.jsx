import React from 'react';

import Language from './language.jsx';

module.exports = function LanguageList (props) {

    return props.languages.map(
        language => (<Language {...language} />)
    );

}