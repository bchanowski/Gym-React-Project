import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";

function App() {
  const AppRoutes = () =>
    useRoutes([
      { path: "/", element: <Home /> },
      { path: "/products", element: <Home /> },
      { path: "/services", element: <Home /> },
      { path: "/signup", element: <Home /> },
    ]);

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
