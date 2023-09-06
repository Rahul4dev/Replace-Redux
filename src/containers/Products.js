// import React, { useContext } from 'react';
// import { ProductsContext } from '../context/products-context';
// import { useSelector } from 'react-redux';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks/store/store';

import './Products.css';

const Products = (props) => {
  // const productList = useSelector(state => state.shop.products);
  // const productList = useContext(ProductsContext).products;
  const state = useStore()[0];
  const products = state.products;
  return (
    <ul className="products-list">
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
