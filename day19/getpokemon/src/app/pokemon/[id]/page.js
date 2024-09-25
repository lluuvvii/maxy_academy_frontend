"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Spinner, Table, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function PokemonDetail({ params }) {
  const router = useRouter()
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Pokemon detail based on ID
  useEffect(() => {
    const savedPokemon = localStorage.getItem('pokemon');
    if (savedPokemon) {
      const parsedPokemon = JSON.parse(savedPokemon);
      setLoading(true);
      setPokemon(parsedPokemon);
      setLoading(false);
      return;
    }

    const fetchPokemon = async () => {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data);
      setLoading(false);
    };

    if (params?.id) fetchPokemon();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <Container className="mt-5">
        <Row className="mb-20">
          <Col md={6}>
            <Card className="border-8" style={{ borderColor: "#3764bf" }}>
              <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
              <Card.Body style={{ backgroundColor: "#fff094" }}>
                <Card.Title style={{ fontFamily: 'fantasy', color: "#3764bf" }}>{pokemon.name.toUpperCase()}</Card.Title>
                <Card.Text>
                  <strong>Height:</strong> {pokemon.height} dm<br />
                  <strong>Weight:</strong> {pokemon.weight} hg<br />
                  <strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-8" style={{ borderColor: "#3764bf" }}>
              <Card.Body>
                <Card.Title>Base Stats</Card.Title>
                <Table striped bordered hover size="sm" className="border-3" style={{ borderColor: "#3764bf" }}>
                  <thead>
                    <tr>
                      <th>Stat</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.stats.map(stat => (
                      <tr key={stat.stat.name}>
                        <td>{stat.stat.name.toUpperCase()}</td>
                        <td>{stat.base_stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* Abilities Section */}
                <Row className="mt-3">
                  <Col md={12}>
                    <Card className="border-3" style={{ borderColor: "#3764bf" }}>
                      <Card.Body>
                        <Card.Title>Abilities</Card.Title>
                        <ul>
                          {pokemon.abilities.map(ability => (
                            <li key={ability.ability.name}>
                              {ability.ability.name}
                            </li>
                          ))}
                        </ul>

                      </Card.Body>
                    </Card>
                    <Button className='mt-3' variant="danger" onClick={() => router.push(`/`)} style={{ backgroundColor: "#3764bf" }}>
                      Back
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
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
    </>
  );
}
