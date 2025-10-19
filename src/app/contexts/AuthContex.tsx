import { createContext, useCallback, useState } from "react";

interface AuthContextValue {
  isSignedIn: boolean;
  signin: () => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const signin = useCallback(() => {
    setSignedIn(true)
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn: signedIn, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
