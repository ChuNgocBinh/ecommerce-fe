import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector((state) => state.app.user);
  return user;
};
