/**
 * Provides authentication context for the application.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The authentication context provider.
 */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (prop) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {prop.children}
    </AuthContext.Provider>
  );
};
