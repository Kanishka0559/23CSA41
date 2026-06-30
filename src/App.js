import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FilterBar from './components/FilterBar';
import NotificationCard from './components/NotificationCard';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Campus Notifications</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome to the React App!</h2>
          <h2>This is a simple React application.</h2>
        </p>

        <nav>
          <button>All Notifications</button>
          <button>Priority Notifications</button>
        </nav>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
