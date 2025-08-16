import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const Register: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard"; // Redirect to dashboard or default path
  const handleRegister = (data: { email: string; password: string }) => {
    // console.log("Register data:", data);
    // TODO: call backend API here
    // Simulating a successful registration by setting a token
    console.log("Simulating registration with token", data);
    login("123456789");
    navigate(from, { replace: true });// Redirect to the intended page after registration

    // This is a placeholder. In a real application, you would handle the response from the backend API here,
    // such as checking for errors or redirecting the user upon successful registration.
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default Register;
