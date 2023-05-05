import React, { useEffect, useState } from 'react';
import './style.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    const url = 'https://dummyjson.com/products';
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data?.products);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='container'>
      <div className='header-div'>
        <h1>Knowledge Base</h1>
        <div className='header-border'></div>
      </div>
      {products.map((product) => (
        <div className='item'>
          <img src={product.thumbnail} className='product-thumbnail' />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
