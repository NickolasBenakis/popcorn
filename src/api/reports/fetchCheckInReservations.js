import { API_URL } from '../../app/Constants';
export default (dateFrom, dateTo) => {
    const url = `${API_URL}/popCornCinemaApi/Reports/GetCheckedInReservationsByAuditorium?dtFrom=${dateFrom}&dtTo=${dateTo}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
