import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';

const movie = {
    id: '1',
    title: 'RRR',
    genre: 'Action',
    rating: '9'
};

const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('MovieCard Component', () => {

    test('Should display correct movie title', () => {
        renderWithRouter(<MovieCard movie={movie} />);
        const titleElement = screen.getByText(movie.title);
        expect(titleElement).toBeInTheDocument();
    });

    test('Should display correct movie genre', () => {
        renderWithRouter(<MovieCard movie={movie} />);
        const genreElement = screen.getByText(`Genre: ${movie.genre}`);
        expect(genreElement).toBeInTheDocument();
    });

    test('Should display correct movie rating', () => {
        renderWithRouter(<MovieCard movie={movie} />);
        const ratingElement = screen.getByText(`Rating: ${movie.rating}`);
        expect(ratingElement).toBeInTheDocument();
    });

    test('Should display "View Details" button', () => {
        renderWithRouter(<MovieCard movie={movie} />);
        const linkElement = screen.getByRole('link', { name: /view details/i });
        expect(linkElement).toBeInTheDocument();
    });

    test('Should redirect to correct movie details page', () => {
        renderWithRouter(<MovieCard movie={movie} />);
        const linkElement = screen.getByRole('link', { name: /view details/i });
        expect(linkElement).toHaveAttribute('href', `/movies/${movie.id}`);
    });

});
