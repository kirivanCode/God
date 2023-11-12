import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/ProductList.css';

const CatalogPage = () => {
  return (
    <div>
      <h2 className='header-Catalog'>Nuestros productos</h2>
      <ProductList />
    </div>
  );
};

export default CatalogPage;