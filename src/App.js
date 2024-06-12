import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Layout/Header";

import PrivateRoute from "./components/Auth/PrivateRoute";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  console.log("App component is rendered");
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/landing" element={<LandingPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
