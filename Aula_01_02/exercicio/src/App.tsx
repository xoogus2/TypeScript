// src/App.tsx
import React from 'react';
import './App.css';
import Card from './Card';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exemplo de uso de Interface em TypeScript com React</h1>
        <Card 
          title="Aprendendo TypeScript"
          description="TypeScript é uma linguagem de tipagem estática que estende o JavaScript."
          imageUrl="https://via.placeholder.com/300"
        />
        <Card 
          title="React"
          description="React é uma biblioteca JavaScript para construção de interfaces de usuário."
          imageUrl="https://via.placeholder.com/300"
        />
      </header>
    </div>
  );
}

export default App;
