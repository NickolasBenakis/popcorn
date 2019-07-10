import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './theaterCard.scss';
import '../moviesCard/moviesCard.scss';
import { Link } from 'react-router-dom';

class TheaterCard extends Component {
    render() {
        return (
            <Card className="CardContainer">
                <Card.Img
                    className="card-img"
                    variant="top"
                    src={`https://robohash.org/${this.props.id}?200x200`}
                    alt="theater"
                />
                <Card.Body>
                    <Card.Title style={{ padding: '10px', fontSize: '11px' }}>
                        {this.props.title}
                    </Card.Title>
                    <Link to="/movie">
                        <Button variant="primary">
                            Theater no.{this.props.id}
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}
export default TheaterCard;
