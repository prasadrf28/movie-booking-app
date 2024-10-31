import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import MovieNotFound from './MovieNotFound';

const Movies = () => {
    const movies = useSelector((state) => state.movies);
    const [searchMovie, setSearchMovie] = useState('');

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h2 className="text-center">Movies</h2>

            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movie.."
                    value={searchMovie}
                    onChange={(event) => setSearchMovie(event.target.value)}
                />
            </div>

            <div className="row">
                {filteredMovies.length === 0 ? (
                    <MovieNotFound />
                ) : (
                    filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Movies;
