// Here we are defining an authentication context for our React application.
// This context will provide authentication state and methods to the components that need it.
// It allows components to access the authentication state and perform login/logout actions.
// The context is created using React's createContext API, and it is used in conjunction with a provider component.
// The provider component will manage the authentication state and provide it to its children.
// The useAuth hook is also defined to allow easy access to the authentication context in functional components
import React, { useEffect, useState, createContext, useContext} from "react";

interface authType {
    token: boolean;
    login: (token: string) => void;
    logout: () => void;
}

import { useNavigate } from "react-router-dom";
const AuthContext = createContext< authType| null>(null);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<boolean>(localStorage.getItem("access_token") ? true : false);
    const login = (token: string) => {
        localStorage.setItem("access_token", token);
        setToken(true);
    }
    const logout = () => {
        localStorage.removeItem("access_token");
        setToken(false);
        navigate("/", { replace: true }); // Redirect to home page after logout
    }
    useEffect(() => {
        const handleStorageChange = () => {
            console.log("Storage changed, updating token state", localStorage.getItem("access_token"));
            setToken(localStorage.getItem("access_token") ? true : false);
            console.log("Current token state:", token);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): authType  =>{
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
    return context;
}