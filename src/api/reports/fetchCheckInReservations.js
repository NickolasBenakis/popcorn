export default (dateFrom, dateTo) => {
    const url = `http://localhost:5000/popCornCinemaApi/Reports/GetCheckedInReservationsByAuditorium?dtFrom=${dateFrom}&dtTo=${dateTo}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
