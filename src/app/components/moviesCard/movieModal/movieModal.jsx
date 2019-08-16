import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import '../moviesCard.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MovieModal({
    show,
    onHide,
    title,
    poster,
    description,
    durationMin,
    cast,
    director,
}) {
    return (
        <Fragment>
            <Modal show={show} onHide={onHide} className="display-fill">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <img
                                src={poster}
                                alt=""
                                srcSet=""
                                className="col-sm-6"
                            />
                            <div className="col-sm-6">
                                <ul className="side-list">
                                    {durationMin && durationMin !== null ? (
                                        <li className="ribbon">
                                            Film Duration:
                                            <strong> {durationMin} </strong>mins
                                        </li>
                                    ) : (
                                        ''
                                    )}
                                    {director && director !== null ? (
                                        <li className="ribbon">
                                            Directed by:
                                            <strong> {director}</strong>
                                        </li>
                                    ) : (
                                        ''
                                    )}
                                    {cast && cast !== 'null' ? (
                                        <li className="ribbon">
                                            Cast: <i> {cast}</i>
                                        </li>
                                    ) : (
                                        ''
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <p className="description col-sm-12">
                                {description}
                            </p>
                            <Link to="/movieDetails" className="col-sm-12">
                                <Button className="btn btn-primary">
                                    Book me
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default MovieModal;
