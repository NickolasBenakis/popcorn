import moment from 'moment-timezone';

export function convertDate(input) {
    return moment(input).format('LL');
}

export function convertDateTime(input) {
    return moment(input).format('dddd DD/MM HH:mm');
}

export function convertToDateTimeLocale(input) {
    return moment(input).format('YYYY-MM-DDTHH:mm');
}

export function calculateWeekdays(dateFrom, dateTo) {
    const startWeek = moment(dateFrom);
    const endWeek = moment(dateTo);

    let arrayOfDays = [];
    while (startWeek <= endWeek) {
        startWeek.add(1, 'days');
        arrayOfDays.push(startWeek.format('ddd DD/MM'));
    }
    return arrayOfDays;
}

export function convertToStandardTime(input) {
    return moment(input, 'HH:mm:ss').format('HH:mm');
}

export function convertFromStandardToUTC(day, time) {
    const input = day + ' ' + time;
    const format = 'ddd DD/MM HH:mm';
    return moment(input, format).format('YYYY-MM-DDTHH:mm');
}
