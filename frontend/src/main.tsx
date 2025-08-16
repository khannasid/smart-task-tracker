import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { DashboardPage } from './pages/DashboardPage.tsx';
import Navbar from './components/ui/Navbar.tsx';
import { AuthProvider } from './components/AuthContext.tsx';
import AnalyticsPage  from './pages/AnalyticsPage.tsx';
import ProjectsPage from './pages/ProjectPage.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        } />
        <Route path="/projects" element={
          <ProtectedRoute>
            <ProjectsPage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);