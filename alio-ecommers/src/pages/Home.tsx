import { Button } from "@/components/ui/button";
import Helmet from "../components/helmet/Helmet";
import heroImage from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import Services from "@/services/Services";
import ProductList from "@/components/ui/ProductList";
import counter from "../assets/images/counter-timer-img.png";
import products from "@/assets/data/products";
import { useEffect, useState } from "react";
import Clock from "@/components/ui/Clock";

function Home() {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="  bg-[#ceebe9]  container mx-auto ">
        <div className="flex items-center ">
          <div className="flex flex-col gap-y-4 w-[50%]">
            <p className="text-base text-[#111]">Trending products in {year}</p>
            <h1 className="text-3xl font-bold capitalize">
              make your interior more minimalistic & modern{" "}
            </h1>
            <p className="text-base text-[#111] ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              vitae nam modi quisquam? Voluptate architecto facere placeat nulla
              nisi repudiandae qui. Molestiae enim provident expedita nam
              dolore, dolorem perspiciatis deserunt!
            </p>
            <div>
              <Button
                type="button"
                variant={"default"}
                className="font-medium text-lg"
              >
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={heroImage} alt="hero-image" />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10 flex items-center justify-center gap-x-6">
        <Services />
      </section>
      <section className="container mx-auto pt-10">
        <h3 className="text-center font-bold text-2xl">Trending products</h3>

        <ProductList data={trendingProducts} />
      </section>
      <section className="container mx-auto py-10">
        <h3 className="text-center font-bold text-2xl">Best Sales</h3>
        <ProductList data={bestSalesProducts} />
      </section>
      <section className="container mx-auto bg-slate-900 my-10">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white text-base font-normal">Limited Offer</h4>
            <h3 className="text-lg font-bold text-white">Quality Armchair</h3>
            <Clock />
            <Button type="button" variant={"secondary"} className="font-medium">
              <Link to="/shop">Visit Store</Link>
            </Button>
          </div>
          <div className=" flex items-center justify-end">
            <img src={counter} alt="" />
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default Home;
