import React from 'react';

import style from './resume.scss';

module.exports = function ContactList (props) {

    var contacts = props.contacts.map(contact => contact.value).join(' - ');

    return (<p className={style.contacts}>{contacts}</p>);

}