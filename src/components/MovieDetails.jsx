import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookingModal from './BookingModal';

const MovieDetails = () => {
    const { id } = useParams();
    const movie = useSelector((state) => state.movies.find((movie) => movie.id === parseInt(id)));

    return (
        <div className="container mt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="card-title mb-0">{movie.title}</h2>
                        <p className="card-text mb-0"><strong>Rating:</strong> {movie.rating}</p>
                    </div>
                    <div className="mb-3">
                        <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
                        <p className="card-text"><strong>Description:</strong> {movie.description}</p>
                    </div>
                    <h5 className="mt-4">Showtimes</h5>
                    <ul className="list-group list-group-horizontal mb-4">
                        {movie.showtimes.map((time) => (
                            <li key={time} className="list-group-item">{time}</li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <BookingModal movie={movie} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
