import { useContext } from 'react';
import { AuthContext } from '@context/auth';

export const useAuth = () => {
  return useContext(AuthContext);
};
