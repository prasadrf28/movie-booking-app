import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Home Component', () => {

    test('Should display welcome message', () => {
        renderWithRouter(<Home />);
        const titleElement = screen.getByRole('heading', { name: /welcome to the movie booking app/i });
        expect(titleElement).toBeInTheDocument();
    });

    test('Should display button with correct text', () => {
        renderWithRouter(<Home />);
        const buttonElement = screen.getByRole('button', { name: /your shows/i });
        expect(buttonElement).toBeInTheDocument();
    });

    test('Should render to correct link', () => {
        renderWithRouter(<Home />);
        const buttonElement = screen.getByRole('button', { name: /your shows/i });
        expect(buttonElement).toHaveAttribute('href', '/movies');
    });
});
