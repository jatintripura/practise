import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden text-dark bg-white">
        <Hero />
        <Services />
      </main>
    </>
  );
};
export default App;
