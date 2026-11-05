import React from "react";
import Home from "../src/home/Home";
import "./App.css";
import Courses from "../src/courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import Contects from "../src/Contect/Contects";
import Abouts from "../src/Abouts/Abouts";
import SignUp from "./components/SignUp";
import ReadMore from "./components/ReadMore";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home />
      <Course />*/}
      <div className="dark:bg-slate900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contect" element={<Contects />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
