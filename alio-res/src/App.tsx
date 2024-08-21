import BestSeller from "./components/bestSeller/BestSeller";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NewProducts from "./components/newProducts/NewProducts";
import Products from "./components/products/Products";
import ProductSale from "./components/productSale/ProductSale";
import TopBrand from "./components/topbrand/TopBrand";
import View from "./components/view/View";

const App = () => {
  return (
    <>
      <Hero />
      <Products />
      <ProductSale />
      <NewProducts />
      <BestSeller />
      <TopBrand />
      <View />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
