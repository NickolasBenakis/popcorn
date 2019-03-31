import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './moviesCard.scss';

export default class MoviesCard extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <Card className="test" style={{ width: '18rem', margin: "20px" }}>
                    <Card.Img className="card-img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/CaptainMarvel18.jpg/175px-CaptainMarvel18.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>;
            </div>
        )
    }
}
