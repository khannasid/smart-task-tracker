import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard"; // Redirect to dashboard or default path
  const handleLogin =async (data: { email: string; password: string }) => {
    // console.log("Login data:", data);
    // TODO: call backend API here
    // Simulating a successful login by setting a token
     login("123456789");
    navigate(from, { replace: true }); // Redirect to the intended page after login
    
    // This is a placeholder. In a real application, you would handle the response from the backend API here,
    // such as checking for errors or redirecting the user upon successful registration.
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;
