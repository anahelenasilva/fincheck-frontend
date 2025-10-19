import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

interface AuthContextValue {
  isSignedIn: boolean;
  signin: (accessToken: string) => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn: signedIn, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
