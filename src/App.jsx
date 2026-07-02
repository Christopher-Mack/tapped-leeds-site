import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import MenuManager from "./pages/MenuManager";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin/menu" element={<MenuManager />} />
      </Routes>
    </main>
  );
}