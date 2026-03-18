import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"; // 1. Importas la última pieza

const Home = () => {
  const myCards = [
    { 
        title: "El DOM", 
        description: "Es el árbol de tu HTML. JavaScript lo usa para cambiar cosas en la pantalla sin recargar.", 
        imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=325&fit=crop" 
    },
    { 
        title: "Componentes", 
        description: "Son las piezas de LEGO de React. Dividir tu código te hace la vida más fácil y ordenada.", 
        imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&h=325&fit=crop" 
    },
    { 
        title: "Bootstrap 5", 
        description: "Nuestro estilista personal. Nos da clases listas para que la web se vea profesional rápido.", 
        imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&h=325&fit=crop" 
    },
    { 
        title: "Concepto DRY", 
        description: "Don't Repeat Yourself. Si escribes lo mismo dos veces, algo estás haciendo mal. ¡Usa .map()!", 
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=325&fit=crop" 
    }
];

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {myCards.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer /> {/* 2. Colocas el Footer al final */}
    </div>
  );
};

export default Home;
