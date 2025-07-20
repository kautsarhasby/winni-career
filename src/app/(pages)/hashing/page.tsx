"use client";

import { useState } from "react";
import bcrypt from "bcryptjs";

export default function Page() {
  const [password, setPassword] = useState("");
  const [hashed, setHashed] = useState("");

  const handleHash = async () => {
    if (!password) return;
    const hash = await bcrypt.hash(password, 10);
    setHashed(hash);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Hashing Password</h1>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleHash}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Hash
      </button>
      {hashed && (
        <div className="break-all text-white p-2 rounded">
          <strong>Hashed:</strong> {hashed}
        </div>
      )}
    </div>
  );
}
