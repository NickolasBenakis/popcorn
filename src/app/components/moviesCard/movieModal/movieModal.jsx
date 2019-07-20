import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import '../moviesCard.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
                        <Link to="/movieDetails">
                            <Button className="btn btn-primary">Book me</Button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default MovieModal;
