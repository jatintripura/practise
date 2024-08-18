import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import Banner3 from "./components/banner/Banner3";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero /Hero";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
    </main>
  );
};

export default App;
