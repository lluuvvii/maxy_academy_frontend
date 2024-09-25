"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Button, Form, Spinner, Card, Row, Col, Table, Container } from 'react-bootstrap';
import Image from 'next/image';

export default function Home() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Check localStorage on component mount
  useEffect(() => {
    const savedPokemon = localStorage.getItem('pokemon');
    const pokemon_username = localStorage.getItem('pokemon_username');
    if (savedPokemon) {
      setPokemon(JSON.parse(savedPokemon));
      setName(JSON.parse(pokemon_username));
    }
  }, []);

  // Fetch Pokemon from API
  const fetchPokemon = async () => {
    setLoading(true);
    const randomId = Math.floor(Math.random() * 1025) + 1; // Random Pokemon ID 1-1025
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    setPokemon(response.data);
    localStorage.setItem('pokemon', JSON.stringify(response.data));
    localStorage.setItem('pokemon_username', JSON.stringify(name))
    setLoading(false);
  };

  // Handle form submission
  const handleGacha = (e) => {
    e.preventDefault();
    if (name) {
      fetchPokemon();
    } else {
      alert('Please enter your name before gacha!');
    }
  };

  console.log(pokemon)

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center mt-5">
        <div className="d-flex justify-center">
          <Image src="/img/get_pokemon.png" alt="logo" width={500} height={100} />
        </div>

        {/* Form submission */}
        <Row className="mt-3 d-flex justify-content-center">
          <Col md={4}>
            <Form onSubmit={handleGacha}>
              <Form.Group className="mb-3">
                <Form.Label className="font-extrabold text-blue-700">Enter your name</Form.Label>
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
                disabled={loading}
                style={{ backgroundColor: "#3764bf" }}
              >
                {loading ? <Spinner as="span" animation="border" size="sm" /> : "Start Gacha"}
              </Button>
            </Form>
          </Col>
        </Row>
        {/* Display Pokemon results */}
        {pokemon && (
          <div className="mt-5">
            <h3 className="font-extrabold text-blue-700">Congratulations {name}!</h3>

            <Row className="mt-3 mb-20 d-flex justify-content-center">
              {/* Basic Info Section */}
              <Col md={4}>
                <Card className="border-8" style={{ borderColor: "#3764bf" }}>
                  <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <Card.Body style={{ backgroundColor: "#fff094" }}>
                    <Card.Title style={{ fontFamily: 'fantasy', color: "#3764bf" }}>{pokemon.name.toUpperCase()}</Card.Title>
                    <Card.Text>
                      <strong>Height:</strong> {pokemon.height} dm<br />
                      <strong>Weight:</strong> {pokemon.weight} hg<br />
                      <strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}
                    </Card.Text>

                    {/* View Details Button */}
                    <Button className="mt-3" onClick={() => router.push(`/pokemon/${pokemon.id}`)}
                      style={{ backgroundColor: "#3764bf" }}
                    >
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
      <footer className="py-3" style={{ backgroundColor: "#3764bf", position: "fixed", bottom: 0, width: "100%" }}>
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-0 text-white">© 2024 Get Pokemon. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
