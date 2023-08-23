import { createContext, useState } from 'react';

const initialProductsList = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

export const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = (props) => {
  const [productsList, setProductsList] = useState(initialProductsList);

  return (
    <ProductsContext.Provider value={{ products: productsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
