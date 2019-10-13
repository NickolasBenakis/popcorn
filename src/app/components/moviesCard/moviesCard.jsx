import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './moviesCard.scss';
import defaultImgMovie from '../../../assets/defaultMovie.jpg';
import MovieModal from './movieModal/movieModal';

class MoviesCard extends Component {
    state = {
        show: false
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    addDefaultSrc(event) {
        event.target.src = defaultImgMovie;
    }

    render() {
        const { show } = this.state;

        return (
            <Fragment>
                <Card className="CardContainer">
                    <Card.Img
                        className="card-img"
                        variant="top"
                        src={this.props.moviePoster}
                        alt="movie"
                        onError={this.addDefaultSrc}
                        rel="preload"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                padding: '10px',
                                fontSize: 'medium',
                                height: '80px'
                            }}>
                            {this.props.title}
                        </Card.Title>
                        <strong>In Theaters from:</strong>
                        <Card.Text>
                            <ion-icon
                                name="calendar"
                                style={{ marginBottom: '-2px' }}></ion-icon>
                            {this.props.premiereDate}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleShow}>
                            More info
                        </Button>
                    </Card.Body>
                </Card>
                <MovieModal
                    show={show}
                    onHide={this.handleClose}
                    id={this.props.id}
                    title={this.props.title}
                    description={this.props.description}
                    poster={this.props.moviePoster}
                    cast={this.props.cast}
                    durationMin={this.props.durationMin}
                    director={this.props.director}
                    fallbackImg={this.addDefaultSrc}
                />
            </Fragment>
        );
    }
}
export default MoviesCard;
