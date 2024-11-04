import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';
import Movies from './Movies';

const sampleMovies = [
    { id: 1, title: 'RRR', genre: 'Action', rating: '9' },
    { id: 2, title: 'ABCD', genre: 'Dance', rating: '8' },
];

jest.mock('./MovieCard', () => ({ movie }) => <div>{movie.title}</div>);
jest.mock('./MovieNotFound', () => () => <div>No movies found</div>);

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

describe('Movies Component', () => {
    beforeEach(() => {
        useSelector.mockReturnValue(sampleMovies);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should display Movies title', () => {
        render(<Movies />);
        const titleElement = screen.getByText(/movies/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('Should display search input', () => {
        render(<Movies />);
        const searchInput = screen.getByPlaceholderText(/search movie/i);
        expect(searchInput).toBeInTheDocument();
    });

    test('Should display all movies', () => {
        render(<Movies />);
        sampleMovies.forEach((movie) => {
            const movieElement = screen.getByText(movie.title);
            expect(movieElement).toBeInTheDocument();
        });
    });

    test('Should filters movies based on search input', () => {
        render(<Movies />);
        const searchInput = screen.getByPlaceholderText(/search movie/i);

        fireEvent.change(searchInput, { target: { value: 'RRR' } });
        expect(screen.getByText('RRR')).toBeInTheDocument();
        expect(screen.queryByText('Bahubali')).not.toBeInTheDocument();
    });

    test('SHould displays "No movies found" message for no search results', () => {
        render(<Movies />);
        const searchInput = screen.getByPlaceholderText(/search movie/i);

        fireEvent.change(searchInput, { target: { value: 'Bahubali' } });
        expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
    });
});
