import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const BookingModal = ({ movie }) => {
    const [showtime, setShowtime] = useState('');
    const [tickets, setTickets] = useState(1);
    const dispatch = useDispatch();

    const handleBooking = () => {
        if (showtime) {
            dispatch({ type: 'BOOK_TICKET', payload: { movie: movie.title, showtime, tickets } });
            alert("Your Booking Successful!!!");
            console.log("Your Booking Successful!!!");
        } else {
            alert("Please select showtime..");
            console.log("Please select showtime..");
        }
    };

    return (
        <div>
            <h5>Book Tickets</h5>
            <div className="d-flex gap-2 mb-2">
                <select
                    onChange={(event) => setShowtime(event.target.value)}
                    className="form-select"
                    style={{ width: 'auto' }}
                >
                    <option value="">Select Showtime</option>
                    {movie.showtimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>

                <input
                    type="number"
                    value={tickets}
                    onChange={(event) => setTickets(event.target.value)}
                    className="form-control"
                    min="1"
                    style={{ width: 'auto' }}
                />
            </div>

            <button className="btn btn-success" onClick={handleBooking}>
                Book your tickets
            </button>
        </div>
    );
};

export default BookingModal;
