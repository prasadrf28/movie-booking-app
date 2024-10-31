import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Genre: {movie.genre}</p>
                    <p className="card-text">Rating: {movie.rating}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
