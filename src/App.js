import "./App.css";
import SearchForm from "./pages/SearchForm";
import { Routes, Route } from "react-router-dom";
import Listings from "./pages/Listings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchForm />} />
      <Route path="/listings" element={<Listings />} />
    </Routes>
  );
}

export default App;
