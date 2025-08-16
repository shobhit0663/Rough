import React from "react";
import "./App.css";

function App() {
  return (
    <div className="homepage">
      <header className="navbar">
        <h1 className="logo">LiaisoIT (Primaverse Studios) </h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to LiaisonIT</h2>
        <p>This is a simple homepage designed.</p>
        <button>Get Started</button>
      </section>

      <footer className="footer">
        <p>© 2025 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
