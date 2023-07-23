import { createContext } from 'react';

interface IOrderContext {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const OrderContext = createContext<IOrderContext>({
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
});

export default OrderContext;
