import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { firebase } from '@config/firebase';
import { AuthContextType } from '@libs/dto/Auth';
import { useRouter } from 'next/router';

export const AuthContext = createContext<AuthContextType>({} as never);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebase.default.User | null>(null);

  const signOut = async () => {
    await firebase.default.auth().signOut();
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      (window as any).nookies = nookies;
    }
    return firebase.default.auth().onIdTokenChanged(async (user) => {
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', {});
        return;
      }

      console.log(`updating token...`);
      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, {});
    });
  }, []);

  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const user = firebase.default.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
