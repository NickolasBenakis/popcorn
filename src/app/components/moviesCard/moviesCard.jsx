import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './moviesCard.scss';

export default class MoviesCard extends Component {
    render() {
        return (
            // <div style={{ padding: "20px" }}>
            <Card className="CardContainer">
                <Card.Img className="card-img" variant="top" src={`https://robohash.org/${this.props.id}?200x200`} alt='movie' />
                <Card.Body>
                    <Card.Title style={{ padding: "10px", fontSize: "11px" }}>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.vote_average}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            // </div>
        )
    }
}
