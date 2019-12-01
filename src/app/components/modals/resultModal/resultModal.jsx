import React, { Fragment, useEffect } from 'react';
import { Modal, Button, Accordion, Card } from 'react-bootstrap';
import './resultModal.scss';
import { Link } from 'react-router-dom';
import pdfDownloader from '../../../utils/pdfDownloader';
const ResultModal = ({ showModal, handleModalClose, model }) => {
    useEffect(() => {
        //console.log(showModal);
    }, []);
    useEffect(() => {
        // //console.log(model);
        // console.log(model.reservationId);
    }, [model]);

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
