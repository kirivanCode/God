import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Función para contar la cantidad de un producto en el carrito
  const countOccurrences = (arr, value) => {
    return arr.reduce((acc, item) => (item.id === value ? acc + 1 : acc), 0);
  };

  // Crear un conjunto de productos únicos en el carrito
  const uniqueProducts = Array.from(new Set(cartItems.map(item => item.id)));

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p>¡Tu carrito está vacío! Agrega productos para comenzar tus compras.</p>
      ) : (
        <ul className="cart-items">
          {uniqueProducts.map((productId, index) => {
            const product = cartItems.find(item => item.id === productId);
            const quantity = countOccurrences(cartItems, productId);
            const subtotal = product.price * quantity;

            return (
              <li key={index} className="cart-item">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ marginRight: '10px', maxWidth: '50px' }}
                  />
                  <span>{product.name}</span>
                </div>
                <div>
                  ${product.price} x {quantity} = ${subtotal.toFixed(2)}
                  <button
                    className="delete-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Eliminar del carrito
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cart;
