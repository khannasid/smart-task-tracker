import React from "react";
import { Button } from "./button";
import {Link} from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Navbar(): React.JSX.Element {
    const { token, logout } = useAuth();
  return (
     <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/">
          <h1 className="text-2xl font-bold text-stone-700">Smart Task Tracker</h1>
          </a>
          <nav className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-400">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-400">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-400">
              Contact
            </a>
            {token ?
             (
            <>
            <Button variant="secondary" onClick={() => {logout()}}>
              Logout    
            </Button>
            </>
            )
             :(
            <>
            <Link to="/login"><Button variant="secondary">Login</Button></Link>
            <Link to="/signup"><Button>Sign Up</Button></Link>
            </>
            )}
          </nav>
        </div>
      </header>
  )
}