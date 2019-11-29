export default (dateFrom, dateTo) => {
    const url = `${API_URL}/popCornCinemaApi/Reports/GetAllReportsAsync?dtFrom=${dateFrom}&dtTo=${dateTo}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(data => data.json())
        .then(res => res);
};
