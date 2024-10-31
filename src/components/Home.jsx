import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <Card className="text-center shadow-sm">
                <Card.Body>
                    <Card.Title as="h1" className="display-4">Welcome to the Movie Booking App</Card.Title>
                    <Button variant="primary" size="lg" href="/movies">Your Shows</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;
