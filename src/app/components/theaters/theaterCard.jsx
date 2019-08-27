import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './theaterCard.scss';
import '../moviesCard/moviesCard.scss';
import { Link } from 'react-router-dom';

function TheaterCard({ name, id }) {
    return (
        <Card className="CardContainer">
            <Card.Img
                className="card-img"
                variant="top"
                src={`https://res.cloudinary.com/nickolasben/image/upload/w_450,c_scale/popcorn/${name.toLowerCase()}.png`}
                alt="theater"
            />
            <Card.Body>
                <Card.Title style={{ padding: '10px', fontSize: '11px' }}>
                    {name}
                </Card.Title>
                <Link to="/movie">
                    <Button variant="primary">Theater no.{id}</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default TheaterCard;
