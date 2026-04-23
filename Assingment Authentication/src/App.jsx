import { useState } from "react";

// Hardcoded user data (DO NOT MODIFY)
const users = {
  "user1@example.com": { password: "user123", role: "user" },
  "moderator@example.com": { password: "mod123", role: "moderator" },
  "admin@example.com": { password: "admin123", role: "admin" }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState("");

  // TODO: Implement the handleLogin function
  const handleLogin = () => {
    // 1. Check if the email exists in users
    if (users[email]) {
      // 2. Validate the password
      if(users[email].password === password) {
        setUserRole(users[email].role);
        setError("");
      } else {
        setError("Invalid Credentials ❌");
      }
    }
    else {
      setError("Invalid Credentials ❌");
    }
    
    // 3. If valid, update the userRole state
    // 4. If invalid, update the error state with an appropriate message
  };

  return (
    <div>
      {userRole ? (
        <Dashboard role={userRole} />
      ) : (
        <>
          <h2>Login</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
};

// Dashboard Component - Displays different messages based on role
const Dashboard = ({ role }) => {
  return (
    <div>
      <h2>Welcome, {role.toUpperCase()} 🎉</h2>
      {role === "user" && <p>You can view content 📜</p>}
      {role === "moderator" && <p>You can moderate discussions ⚖️</p>}
      {role === "admin" && <p>You have full control 🔧</p>}
    </div>
  );
};

export default Login;
