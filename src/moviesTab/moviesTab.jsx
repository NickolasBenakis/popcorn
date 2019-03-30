import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import MoviesCard from '../moviesCard/moviesCard';

export default class MoviesTab extends Component {
    render() {
        return (
            <div>
                <Nav justify variant="tabs" activeKey="nowPlaying">
                    <Nav.Item>
                        <Nav.Link eventKey="nowPlaying">Now Playing</Nav.Link>
                        <MoviesCard />
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Coming Soon</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Early Bird Discounts
                            </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
