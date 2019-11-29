export default async id => {
    const url = `http://localhost:5000/popCornCinemaApi/Reservations/GetReservationPdfByIdAsync/${id}`;
    return fetch(url, {
        method: 'GET'
    })
        .then(res => res.blob())
        .then(res => pdfGenerator(res))
        .catch(error => console.log(error));
};

// const isOkStatus = (status, data) => {
//     if (status === 200) {
//         return data.blob();
//     }
// };

const pdfGenerator = data => {
    console.log(data);
    const objectUrl = URL.createObjectURL(data);
    console.log(objectUrl);
    //window.open(objectUrl);
    downloadFile(objectUrl, 'reservation.pdf');
};

const downloadFile = (blob, fileName) => {
    const link = document.createElement('a');
    // create a blobURI pointing to our Blob
    link.href = blob;
    link.download = fileName;
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    link.remove();
    // in case the Blob uses a lot of memory
    window.addEventListener('focus', e => URL.revokeObjectURL(link.href), {
        once: true
    });
};