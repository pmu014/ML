import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Content from "./pages/Content";
import Sports from "./pages/Sports";
import Diary from "./pages/Diary";
import Health from "./pages/Health";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
