import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Modal, Button, Accordion, Card, Alert } from 'react-bootstrap';
import './resultModal.scss';
import { Link } from 'react-router-dom';
import pdfDownloader from '../../../utils/pdfDownloader';
const ResultModal = ({ showModal, handleModalClose, model }) => {
    useEffect(() => {}, []);
    useEffect(() => {}, [model]);
    const friendEmail = useRef(null);
    const [emailStatus, setEmailStatus] = useState(false);
    const [emailRes, setEmailRes] = useState(null);
    const emailAFriend = async e => {
        e.preventDefault();
        const payload = {
            ReservationId: model.reservationId,
            UsersEmails: [friendEmail.current.value]
        };
        let res = await fetch(
            'http://localhost:5000/popCornCinemaApi/Reservations/SendReservartionPdfToFriendsByEmail',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        ).then(res => res.json());
        console.log(res);
        if (res) {
            setEmailStatus(true);
            setEmailRes(res);
        }
    };
    return (
        <Fragment>
            <Modal
                id="confirmModal"
                show={showModal}
                onHide={handleModalClose}
                keyboard={false}
                backdrop="static">
                <Modal.Header closeButton={false}>
                    <Modal.Title>
                        {model.error ? (
                            <span>Something went Wrong!</span>
                        ) : (
                            <span>Reservation Completed!</span>
                        )}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className={
                            model.error ? 'error-result' : 'success-result'
                        }></div>
                </Modal.Body>
                <Modal.Footer className="block text-center">
                    <Link to={`/`} className="col-12">
                        <Button
                            className="btn btn-primary"
                            onClick={() => {
                                console.log('return to home');
                            }}>
                            Return to home
                        </Button>
                    </Link>
                    <br />
                    <br />
                    <Button
                        className="btn btn-info pdf-btn"
                        onClick={() => pdfDownloader(model.reservationId)}>
                        Download PDF
                    </Button>
                    <br />
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0">
                                    Email friends
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Insert email address of a Friend
                                    <form onSubmit={emailAFriend}>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                ref={friendEmail}
                                            />
                                            <button
                                                type="submit"
                                                className="btn btn-primary">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                    {emailStatus ? (
                                        <div>
                                            <Alert
                                                variant={'success'}
                                                className="col-12 p-1 m-1">
                                                {emailRes}
                                            </Alert>
                                        </div>
                                    ) : null}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card></Card>
                    </Accordion>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ResultModal;
