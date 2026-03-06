import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;