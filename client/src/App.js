import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
