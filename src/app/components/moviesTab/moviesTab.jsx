import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import MoviesCard from '../moviesCard/moviesCard';
import loadAllMovies from '../../services/loadAllMovies';
import MoviesList from '../moviesCard/moviesList';
import { mockMovies } from '../../../api/mockMovies';
export default class MoviesTab extends Component {



    render() {
        return (
            <div>
                <div id="MovieTab">
                    <div id="chooseTypeOfMovie">
                        <ul style={{ listStyle: "none", padding: "0", margin: "auto" }}>
                            <li style={{ display: "inline-block", margin: "10px" }}><a href="">Playing Now</a></li>
                            <li style={{ display: "inline-block", margin: "10px" }}><a href="">Coming Soon</a> </li>
                        </ul>
                    </div>
                    <div id="MovieCards">
                        <MoviesList mockMovies={mockMovies} />
                    </div>
                </div>
            </div>
        )
    }
}
