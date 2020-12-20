export type AuthContextType = {
  user: firebase.default.User | null;
  signOut: () => void;
};
