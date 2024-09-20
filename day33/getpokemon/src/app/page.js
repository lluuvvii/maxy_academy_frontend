"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button, Form, Spinner, Card, Row, Col, Table, Container } from 'react-bootstrap';

export default function Home() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch Pokemon from API
  const fetchPokemon = async () => {
    setLoading(true);
    const randomId = Math.floor(Math.random() * 150) + 1; // Random Pokemon ID 1-150
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    setPokemon(response.data);
    setLoading(false);
  };

  // Handle form submission
  const handleGacha = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (name) {
      fetchPokemon();
    } else {
      alert('Please enter your name before gacha!');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center mt-5">
        <h2
          className="mb-4"
          style={{
            color: '#ff6347', // Warna merah tomat
            fontSize: '2.5rem', // Ukuran font lebih besar
            fontFamily: 'Arial, sans-serif', // Font keluarga
            textAlign: 'center', // Pusatkan teks
            fontWeight: 'bold', // Tebalkan teks
          }}
        >
          Welcome to Get Pokemon
        </h2>

        {/* Form submission */}
        <Row className="mt-3 d-flex justify-content-center">
          <Col md={4}>
            <Form onSubmit={handleGacha}>
              <Form.Group className="mb-3">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading} // Disable input when loading
                />
              </Form.Group>

              {/* Submit button */}
              <Button
                type="submit"
                variant="danger"
                disabled={loading} // Disable button when loading
              >
                {loading ? <Spinner as="span" animation="border" size="sm" /> : "Start Gacha"}
              </Button>
            </Form>
          </Col>
        </Row>
        {/* Display Pokemon results */}
        {pokemon && (
          <div className="mt-5">
            <h3>Congratulations {name}!</h3>

            <Row className="mt-3 d-flex justify-content-center">
              {/* Basic Info Section */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    <Card.Text>
                      <strong>Height:</strong> {pokemon.height} dm<br />
                      <strong>Weight:</strong> {pokemon.weight} hg<br />
                      <strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}
                    </Card.Text>

                    {/* View Details Button */}
                    <Button className='mt-3' variant="danger" onClick={() => router.push(`/pokemon/${pokemon.id}`)}>
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-3 bg-light py-3">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-0">© 2024 Get Pokemon. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
