import { createContext } from 'react';

interface IProductContext {
  id: number;
  title: string;
  body: string;
}

const ProductContext = createContext<IProductContext>({
  id: 1,
  title: 'first product',
  body: 'body of product',
});

export default ProductContext;