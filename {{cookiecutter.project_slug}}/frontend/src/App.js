import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./app/AppShell";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
