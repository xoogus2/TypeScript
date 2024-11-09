// src/Card.tsx
import React from 'react';

// Definindo a interface que tipa as props que o componente Card vai receber
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Componente funcional que usa a interface CardProps
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Estilos para o card
const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
    maxWidth: '300px',
    textAlign: 'center' as 'center', // Acesso à chave 'center' do enum
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  }
};

export default Card;
