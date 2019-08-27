import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './theaterCard.scss';
import '../moviesCard/moviesCard.scss';
import mars from '../../../assets/mars.png';
import jupiter from '../../../assets/jupiter.png';
import earth from '../../../assets/earth.png';
import { Link } from 'react-router-dom';

class TheaterCard extends Component {
    render() {
        return (
            <Card className="CardContainer">
                <Card.Img
                    className="card-img"
                    variant="top"
                    src={`https://res.cloudinary.com/nickolasben/image/upload/v1566751750/popcorn/${this.props.name.toLowerCase()}.png`}
                    alt="theater"
                />
                <Card.Body>
                    <Card.Title style={{ padding: '10px', fontSize: '11px' }}>
                        {this.props.name}
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
