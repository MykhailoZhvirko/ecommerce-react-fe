import { createContext } from 'react';

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IUserContext {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const UserContext = createContext<IUserContext>({
  users: [],
  setUsers: () => {},
});

export default UserContext;
