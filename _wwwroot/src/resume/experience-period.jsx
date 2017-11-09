import React from 'react';
import moment from 'moment';

import styles from './style.css';

module.exports = function ExperiencePeriod (props) {

    function stringifyDate(value) {

        if (!value) return 'Now';

        var date = moment(new Date(value));
        return date.format('MMM YYYY');
    }

    var dateFrom = stringifyDate(props.from);
    var dateTo = stringifyDate(props.to);

    return (
        <p className={styles.experienceDate}>{dateFrom} - {dateTo}</p>
    );
}