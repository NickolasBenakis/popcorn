import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import '../moviesCard.scss';

function MovieModal({ show, onHide, title }) {
    return (
        <Fragment>
            <Modal show={show} onHide={onHide} className="display-fill">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div>img</div>
                        <div>This is a movie description</div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default MovieModal;
