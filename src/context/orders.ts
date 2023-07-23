import { createContext } from 'react';

interface IOrder {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IOrderContext {
  orders: IOrder[];
  setOrders: (orders: IOrder[]) => void;
}

const OrderContext = createContext<IOrderContext>({
  orders: [],
  setOrders: () => {},
});

export default OrderContext;
