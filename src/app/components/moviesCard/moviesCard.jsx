import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './moviesCard.scss';

import MovieModal from './movieModal/movieModal';

class MoviesCard extends Component {
    state = {
        show: false,
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        const { show } = this.state;

        return (
            <Fragment>
                <Card className="CardContainer">
                    <Card.Img
                        className="card-img"
                        variant="top"
                        src={`https://robohash.org/${this.props.id}?200x200`}
                        alt="movie"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ padding: '10px', fontSize: '11px' }}
                        >
                            {this.props.title}
                        </Card.Title>
                        <Card.Text>
                            <ion-icon
                                name="star"
                                style={{ marginBottom: '-2px' }}
                            ></ion-icon>
                            {this.props.vote_average}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleShow}>
                            Book me
                        </Button>
                    </Card.Body>
                </Card>
                <MovieModal
                    show={show}
                    onHide={this.handleClose}
                    title={this.props.title}
                />
            </Fragment>
        );
    }
}
export default MoviesCard;
