import React, { Fragment, useEffect } from 'react';
import { Form, Modal, InputGroup, FormControl, Spinner } from 'react-bootstrap';
import { convertDateTime } from '../../../utils/dateUtils';
import './confirmModal.scss';

const ConfirmModal = ({ showModal, handleModalClose, model, handleSubmit }) => {
    useEffect(() => {
        console.log(showModal);
    }, []);
    useEffect(() => {
        console.log(model);
    }, [model]);

    const priceCalculator = arrayModel => {
        if (arrayModel.length) {
            return arrayModel.length * 8;
        }
        return 0;
    };

    const seatsList = arrayModel => {
        if (arrayModel && arrayModel.length) {
            const list = arrayModel.map(el => {
                return el.row + el.number;
            });
            return list;
        } else {
            return '';
        }
    };
    const InputContent = (title, value) => {
        return (
            <Fragment>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">
                            {title}
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={value}
                        disabled
                    />
                </InputGroup>
            </Fragment>
        );
    };
    const contentForm = () => {
        return (
            <Form>
                <Form.Group className="confirmation-modal">
                    <div>
                        <ul className="list-none padding-no">
                            <li>
                                {InputContent(
                                    'Title',
                                    model.movieShow.movie.title
                                )}
                            </li>
                            <li>
                                {InputContent(
                                    'Date',
                                    convertDateTime(model.dateTime)
                                )}
                            </li>
                            <li>
                                {InputContent(
                                    'Theater',
                                    model.movieShow.auditorium.name
                                )}
                            </li>
                            <li>
                                {InputContent(
                                    'Seats',
                                    seatsList(model.seatsSelected)
                                )}
                            </li>
                            <li>
                                {InputContent(
                                    'Price',
                                    priceCalculator(model.seatsSelected) + ' €'
                                )}
                            </li>
                        </ul>
                    </div>
                </Form.Group>
            </Form>
        );
    };

    return (
        <Fragment>
            {model.movieShow && model.dateTime ? (
                <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Verify your reservation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{contentForm()}</Modal.Body>
                    <Modal.Footer className="block text-center">
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Proceed
                        </button>
                    </Modal.Footer>
                </Modal>
            ) : (
                <span></span>
            )}
        </Fragment>
    );
};

export default ConfirmModal;
