import Navbar from "./components/Navbar";
import About from "./pages/homepage/about/About";
import Home from "./pages/homepage/home/Home";
import Menu from "./pages/homepage/menu/Menu";
import Location from "./pages/homepage/location/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
