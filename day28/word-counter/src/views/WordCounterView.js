import React from 'react';
import { FaPen } from 'react-icons/fa'; // Menggunakan ikon dari react-icons

const WordCounterView = ({ text, wordCount, onTextChange }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <FaPen style={styles.icon} />Word Counter
      </h1>
      <div style={styles.card}>
        <textarea
          rows="10"
          cols="50"
          value={text}
          onChange={onTextChange}
          placeholder="Start typing your text here..."
          style={styles.textarea}
        />
        <p style={styles.wordCountText}>
          Word Count: <span style={styles.wordCountNumber}>{wordCount}</span>
        </p>
      </div>
    </div>
  );
};

// CSS-in-JS styling with media queries
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    height: '100vh',
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    color: '#4a90e2',
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: '1.2',
  },
  icon: {
    marginRight: '10px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '600px',
    transition: 'width 0.3s ease',
  },
  textarea: {
    width: '100%',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    marginBottom: '20px',
    resize: 'none',
  },
  wordCountText: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#333',
    textAlign: 'right',
  },
  wordCountNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  // Media Queries for responsive design
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2rem',
    },
    card: {
      width: '100%',
    },
    textarea: {
      fontSize: '0.9rem',
    },
    wordCountText: {
      fontSize: '1rem',
    },
    wordCountNumber: {
      fontSize: '1.3rem',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '1.5rem',
    },
    textarea: {
      fontSize: '0.8rem',
      padding: '10px',
    },
    wordCountText: {
      fontSize: '0.9rem',
    },
    wordCountNumber: {
      fontSize: '1.1rem',
    },
  },
};

export default WordCounterView;