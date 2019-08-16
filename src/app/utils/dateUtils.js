import moment from 'moment';

export function convertDate(input) {
    return moment(input).format('LL');
}
