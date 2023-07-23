import { createContext } from 'react';

interface IProduct {
  id: number;
  title: string;
  body: string;
}

interface IProductContext {
  products: IProduct[],
  setProducts: (products: IProduct) => void
}

const ProductContext = createContext<IProductContext>({
  products: [],
  setProducts: () => {}
});

export default ProductContext;