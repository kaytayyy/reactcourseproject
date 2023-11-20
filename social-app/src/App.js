import React from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Profile from './Components/Profile/Profile.js';
import Login from './Components/login/login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ReactDOM from "react-dom/client";
// Step 1. Import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {

const router = createBrowserRouter([
  {
      path: "/home",
      element: <Home className="homeEl" />,
  },
  {
      path: "/profile",
      element: <Profile className="profileEl"/>,
  },
  {
      path: "/login",
      element: <Login className="loginEl"/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
}

export default App;