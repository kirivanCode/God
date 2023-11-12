import React from 'react';
import panBono from '../images/panBono.jpg';
import Alfajor from '../images/Alfajor.jpg';
import tortaChocolate from '../images/tortaChocolate.jpg';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="home-container">

      <section className="welcome-section">
        <h2>Bienvenido a nuestra panadería</h2>
        <img className='img-panBono' src={panBono} alt="Pan de bono" />
        <p>Descubre una amplia variedad de productos horneados frescos con amor y cuidado.</p>
      </section>

      <section className="special-offers-section">
        <h2>Ofertas Especiales</h2>
        <p>No te pierdas nuestras ofertas especiales de esta semana. ¡Aprovecha y disfruta de deliciosos panes y pasteles!</p>
      </section>

      <section className="featured-products-section">
        <h2>Productos Destacados</h2>
        <div className="product-card">
          <h3>Alfajor</h3>
          <img className='img' src={Alfajor} alt="Alfajor" />
          <p>Elaborado con granos enteros y semillas para un sabor nutritivo.</p>
        </div>
        <div className="product-card">
          <h3>Pastel de Chocolate</h3>
          <img className='img' src={tortaChocolate} alt="Pastel de Chocolate" />
          <p>Un clásico irresistible que te hará volver por más.</p>
        </div>
      </section>

      <section className="customer-testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial">
          <p>"¡La panadería tiene los productos más frescos que he probado! ¡Siempre estoy emocionado de venir aquí!"</p>
          <p>- Cliente Feliz</p>
        </div>
      </section>
    
    </div>
  );
};

export default Home;




// ...




