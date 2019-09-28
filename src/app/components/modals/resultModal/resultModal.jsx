import React, { Fragment, useEffect, useState } from 'react';
import {
    Form,
    Modal,
    InputGroup,
    FormControl,
    Spinner,
    Button,
} from 'react-bootstrap';
import { convertDateTime } from '../../../utils/dateUtils';
import './resultModal.scss';
import { Link } from 'react-router-dom';

const ResultModal = ({ showModal, handleModalClose, model }) => {
    useEffect(() => {
        //console.log(showModal);
    }, []);
    useEffect(() => {
        //console.log(model);
    }, [model]);

    const priceCalculator = arrayModel => {
        if (arrayModel.length) {
            return arrayModel.length * 8;
        }
        return 0;
    };
    const isNullObject = object => {
        return (
            Object.entries(object).length !== 0 && object.constructor !== Object
        );
    };

    return (
        <Fragment>
            <Modal
                id="confirmModal"
                show={showModal}
                onHide={handleModalClose}
                keyboard={false}
                backdrop="static"
            >
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
                        }
                    ></div>
                </Modal.Body>
                <Modal.Footer className="block text-center">
                    <Link to={`/`} className="col-sm-12">
                        <Button
                            className="btn btn-primary"
                            onClick={() => {
                                console.log('return to home');
                            }}
                        >
                            Return to home
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default ResultModal;
