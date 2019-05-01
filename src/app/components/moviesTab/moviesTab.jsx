import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import MoviesCard from '../moviesCard/moviesCard';

export default class MoviesTab extends Component {
    render() {
        return (
            <div>
                {/* <Nav justify variant="tabs" activeKey="nowPlaying">
                    <Nav.Item>
                        <Nav.Link eventKey="nowPlaying">Now Playing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Coming Soon</Nav.Link>
                        <MoviesCard />
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Early Bird Discounts
                            </Nav.Link>
                    </Nav.Item>
                </Nav> */}
                <div id="MovieTab">
                    <div id="chooseTypeOfMovie">
                        <ul style={{ listStyle: "none", padding: "0", margin: "auto" }}>
                            <li style={{ display: "inline-block", margin: "10px" }}><a href="">Playing Now</a></li>
                            <li style={{ display: "inline-block", margin: "10px" }}><a href="">Coming Soon</a> </li>
                        </ul>
                    </div>
                    <div id="MovieCards">

                    </div>
                </div>
            </div>
        )
    }
}
