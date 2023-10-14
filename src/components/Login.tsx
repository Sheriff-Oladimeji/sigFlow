"use client"
import React, { useState } from "react";
import axios from "axios";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <input
        type="email"
        value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2  border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
};
