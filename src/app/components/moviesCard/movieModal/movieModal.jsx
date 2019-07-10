import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import '../moviesCard.scss';

function MovieModal({ show, onHide }) {
    return (
        <Fragment>
            <Modal show={show} onHide={onHide} className="display-fill">
                <Modal.Header closeButton>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a movie</Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default MovieModal;
