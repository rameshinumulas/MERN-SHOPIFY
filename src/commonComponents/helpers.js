import moment from 'moment';

export const dateTimeFormatDisplay = (datetimeVal, defaultFormat='MM/DD/YYYY HH:mm') => {
    return (
        <>{moment(datetimeVal).format(defaultFormat)}</>
    )
}