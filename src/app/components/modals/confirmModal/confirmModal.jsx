import React, { Fragment, useEffect, useState } from 'react';
import {
    Form,
    Modal,
    InputGroup,
    FormControl,
    Spinner,
    Button
} from 'react-bootstrap';
import { convertDateTime } from '../../../utils/dateUtils';
import './confirmModal.scss';

const ConfirmModal = ({ showModal, handleModalClose, model, handleSubmit }) => {
    useEffect(() => {}, []);
    useEffect(() => {}, [model]);

    const [isLoading, setIsLoading] = useState(false);

    const handleButton = () => {
        setIsLoading(true);
    };

    const priceCalculator = arrayModel => {
        if (arrayModel.length) {
            return arrayModel.length * 8;
        }
        return 0;
    };

    const seatsList = arrayModel => {
        if (arrayModel && arrayModel.length) {
            const list = arrayModel.map(el => {
                return el.seat.row + el.seat.number;
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
                <Modal
                    id="confirmModal"
                    show={showModal}
                    onHide={handleModalClose}
                    keyboard={!isLoading}
                    backdrop={isLoading ? 'static' : true}>
                    <Modal.Header closeButton={!isLoading}>
                        <Modal.Title>Verify your reservation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{contentForm()}</Modal.Body>
                    <Modal.Footer className="block text-center">
                        {isLoading ? (
                            <span>
                                {' '}
                                <Button variant="primary" disabled>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Loading...
                                </Button>
                            </span>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    handleSubmit();
                                    handleButton();
                                }}>
                                Proceed
                            </button>
                        )}
                    </Modal.Footer>
                </Modal>
            ) : (
                <span></span>
            )}
        </Fragment>
    );
};

export default ConfirmModal;
