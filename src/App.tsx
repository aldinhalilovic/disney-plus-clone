import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { MantineProvider } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MantineProvider withNormalizeCSS>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;
