import { Button } from "@/components/ui/button";
import Helmet from "../components/helmet/Helmet";
import heroImage from "../assets/images/hero-img.png";

function Home() {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <div className="bg-slate-300 py-10 container mx-auto">
        <div className="flex items-center">
          <div className="flex flex-col gap-y-4 w-[50%]">
            <p className="text-base">Trending products in {year}</p>
            <h1 className="text-3xl font-bold capitalize">
              make your interior more minimalistic & modern{" "}
            </h1>
            <p className="text-base ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              vitae nam modi quisquam? Voluptate architecto facere placeat nulla
              nisi repudiandae qui. Molestiae enim provident expedita nam
              dolore, dolorem perspiciatis deserunt!
            </p>
            <div>
              <Button
                type="button"
                variant={"outline"}
                className="font-medium text-lg"
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={heroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Home;
