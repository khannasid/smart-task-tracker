import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: { email: string; password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="max-w-md mx-auto p-6 bg-white rounded-lg shadow"
    // >
    //   <h2 className="text-2xl font-bold mb-4 capitalize">
    //     {type === "login" ? "Login" : "Create an Account"}
    //   </h2>

    //   <div className="mb-4">
    //     <label className="block mb-1 text-sm font-medium text-gray-700">
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //       className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
    //     />
    //   </div>

    //   <div className="mb-4">
    //     <label className="block mb-1 text-sm font-medium text-gray-700">
    //       Password
    //     </label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //       className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
    //     />
    //   </div>

    //   <button
    //     type="submit"
    //     className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    //   >
    //     {type === "login" ? "Login" : "Sign Up"}
    //   </button>
    // </form>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            {type === "login" ? "Welcome Back" : "Create Account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              {type === "login" ? "Log In" : "Sign Up"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
