import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Access from "./pages/Access";
import NoPage from "./pages/NoPage";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Access />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />{" "}
          {/* this means any path that does not exist - no page will show */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
