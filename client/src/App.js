import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Access from "./pages/Access";
import NoPage from "./pages/NoPage";

function App() {
  const [userInfo, setUserInfo] = useState("");

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Access />} />
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="home" element={<Home userInfo={userInfo} />} />
          <Route path="*" element={<NoPage />} />
          {/* this means any path that does not exist - no page will show */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
