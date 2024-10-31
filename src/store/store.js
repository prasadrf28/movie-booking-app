import { createStore } from 'redux';

const initialMovieState = {
    movies: [
        { id: 1, title: "RRR", genre: "Action", rating: 8.0, description: "Action-drama film", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
        { id: 2, title: "KGF: Chapter 2", genre: "Action", rating: 8.4, description: "Action film", showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"] },
        { id: 3, title: "Dilwale Dulhania Le Jayenge", genre: "Romance", rating: 8.1, description: "Romantic film", showtimes: ["12:00 PM", "3:00 PM", "6:00 PM"] },
        { id: 4, title: "3 Idiots", genre: "Comedy-Drama", rating: 8.4, description: "Comedy-drama about friendship and education", showtimes: ["9:00 AM", "12:00 PM", "3:00 PM"] },
        { id: 5, title: "Bahubali: The Beginning", genre: "Action", rating: 8.0, description: "Epic action-drama", showtimes: ["10:30 AM", "1:30 PM", "4:30 PM"] },
        { id: 6, title: "Bahubali: The Conclusion", genre: "Action", rating: 8.2, description: "Epic action-drama conclusion", showtimes: ["11:30 AM", "2:30 PM", "5:30 PM"] },
        { id: 7, title: "Dangal", genre: "Biography", rating: 8.4, description: "Biographical sports drama", showtimes: ["9:00 AM", "12:00 PM", "6:00 PM"] },
        { id: 8, title: "Lagaan", genre: "Sports-Drama", rating: 8.1, description: "Historical sports-drama", showtimes: ["10:00 AM", "1:30 PM", "5:00 PM"] },
        { id: 9, title: "Kabir Singh", genre: "Romance-Drama", rating: 7.1, description: "Romantic drama", showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"] },
        { id: 10, title: "Tumbbad", genre: "Horror", rating: 8.3, description: "Fantasy horror film", showtimes: ["9:30 AM", "12:30 PM", "6:30 PM"] },
        { id: 11, title: "Chak De! India", genre: "Sports", rating: 8.2, description: "Inspirational sports film", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
        { id: 12, title: "PK", genre: "Comedy-Drama", rating: 8.1, description: "Social comedy about religion", showtimes: ["9:00 AM", "12:00 PM", "3:00 PM"] }
    ],
    bookings: [],
};


const moviesReducer = (state = initialMovieState, action) => {

    if (action.type === 'BOOK_TICKET') {
        return {
            ...state,
            bookings: [...state.bookings, action.payload],
        };
    }

    return state;
};

const store = createStore(moviesReducer);

export default store;
