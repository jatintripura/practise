import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Subscribe from "./components/subscribe/Subscribe";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden text-dark bg-white">
        <Hero />
        <Services />
        <Banner />
        <Subscribe />
        <Banner2 />
        <Footer />
      </main>
    </>
  );
};
export default App;
