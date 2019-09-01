import moment from 'moment';

export function convertDate(input) {
    return moment(input).format('LL');
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
