import { createContext } from 'react';

interface IUserContext {
  id: number;
  name: string;
  email: string;
}

const UserContext = createContext<IUserContext>({
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
});

export default UserContext;
