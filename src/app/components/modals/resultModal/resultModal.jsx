import React, { Fragment, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './resultModal.scss';
import { Link } from 'react-router-dom';

const ResultModal = ({ showModal, handleModalClose, model }) => {
    useEffect(() => {
        //console.log(showModal);
    }, []);
    useEffect(() => {
        //console.log(model);
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
                    <Link to={`/`} className="col-sm-12">
                        <Button
                            className="btn btn-primary"
                            onClick={() => {
                                console.log('return to home');
                            }}>
                            Return to home
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ResultModal;
