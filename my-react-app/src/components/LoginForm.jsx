import { useState, useEffect } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [storedData, setStoredData] = useState(null);

  // useEffect(() => {
  //   const savedData = localStorage.getItem("loginData");
  //   if (savedData) {
  //     setStoredData(JSON.parse(savedData));
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { username, password };
    localStorage.setItem("loginData", JSON.stringify(loginData));
    setStoredData(loginData);
  };

  const handleReset = () => {
    localStorage.removeItem("loginData");
    setStoredData(null);
    setUsername(""); // Clear input fields
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        <button type="button" onClick={handleReset} className="bg-red-500 text-white p-2 rounded">Reset</button>
      </form>      
      {storedData && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <h3 className="font-bold">Stored Data:</h3>
          <p><strong>Username:</strong> {storedData.username}</p>
          <p><strong>Password:</strong> {storedData.password}</p>
        </div>
      )}
    </div>
  );
}
