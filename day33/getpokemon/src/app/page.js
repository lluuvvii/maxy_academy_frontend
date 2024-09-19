"use client"

import { useState } from 'react';
import axios from 'axios';
import { Button, Form, Spinner } from 'react-bootstrap';

export default function Home() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    const randomId = Math.floor(Math.random() * 150) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    setPokemon(response.data);
    setLoading(false);
  };

  const handleGacha = () => {
    if (name) {
      fetchPokemon();
    } else {
      alert('Please enter your name before gacha!');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to Getpokemon</h1>
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </Form.Group>

        <Button 
          variant="danger" 
          onClick={handleGacha} 
          disabled={loading}
        >
          {loading ? <Spinner as="span" animation="border" size="sm" /> : "Start Gacha"}
        </Button>
      </Form>

      {pokemon && (
        <div className="mt-5">
          <h3>Congratulations {name}!</h3>
          <div className="pokemon-result card mt-3 mx-auto" style={{ width: '18rem' }}>
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              className="card-img-top img-fluid" 
            />
            <div className="card-body">
              <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
              <p className="card-text">
                Height: {pokemon.height} decimetres<br />
                Weight: {pokemon.weight} hectograms<br />
                Type: {pokemon.types.map(type => type.type.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}