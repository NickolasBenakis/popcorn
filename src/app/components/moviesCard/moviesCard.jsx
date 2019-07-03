import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './moviesCard.scss';
import { Link } from 'react-router-dom';

class MoviesCard extends Component {
    render() {
        return (
            <Card className="CardContainer">
                <Card.Img
                    className="card-img"
                    variant="top"
                    src={`https://robohash.org/${this.props.id}?200x200`}
                    alt="movie"
                />
                <Card.Body>
                    <Card.Title style={{ padding: '10px', fontSize: '11px' }}>
                        {this.props.title}
                    </Card.Title>
                    <Card.Text>
                        <ion-icon
                            name="star"
                            style={{ marginBottom: '-2px' }}
                        ></ion-icon>
                        {this.props.vote_average}
                    </Card.Text>
                    <Link to="/movie">
                        <Button variant="primary">Book me</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}
export default MoviesCard;
