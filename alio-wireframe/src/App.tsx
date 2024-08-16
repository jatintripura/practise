import { MdStar } from "react-icons/md";
import Hero from "./components/hero/Hero";
import iphone from "./assets/iPhone X.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import lgo from "./assets/logo.png";
const textHeading = [
  {
    id: 1,
    titile: "Heading",
    description:
      "You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that you can be sure to get everything.",
    link: "Learn more",
  },
  {
    id: 2,
    titile: "Heading",
    description:
      "You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that you can be sure to get everything.",
    link: "Learn more",
  },
  {
    id: 3,
    titile: "Heading",
    description:
      "You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that you can be sure to get everything.",
    link: "Learn more",
  },
];
const status = [
  {
    id: 1,
    titile: "23.4K",
    subTitle: "Active Merchants",
  },
  {
    id: 2,
    titile: "$3.4K",
    subTitle: "Revenues in 2018",
  },
  {
    id: 3,
    titile: "873K",
    subTitle: "Downloads",
  },
  {
    id: 4,
    titile: "87+",
    subTitle: "Countries",
  },
  {
    id: 5,
    titile: "$58K",
    subTitle: "Revenue Per Hour",
  },
];
const step = [
  {
    id: 1,
    title: "Step 1",
    description:
      "Third you will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure.",
  },
  {
    id: 2,
    title: "Step 2",
    description:
      "Third you will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure.",
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "Third you will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure.",
  },
];
const App = () => {
  return (
    <div>
      <Hero />
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 px-10 md:px-0 ">
            {textHeading.map((item) => (
              <div className="flex flex-col items-start gap-y-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#969696] ">
                  <MdStar className="text-lg text-primary" />
                </div>
                <h1 className="text-xl text-primary font-bold">
                  {item.titile}
                </h1>
                <p className="text-secondary !leading-snug">
                  {item.description}
                </p>
                <a href="#" className="text-accent">
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-10 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-0">
            {status.map((item) => (
              <div className="flex flex-col items-start gap-y-2">
                <h1 className="text-6xl font-bold text-primary ">
                  {item.titile}
                </h1>
                <p className="text-secondary text-lg">{item.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container flex flex-col items-center justify-center gap-y-10">
          <div className="max-w-[700px] flex flex-col items-center justify-center gap-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Short heading
            </h1>
            <p className="text-center text-secondary text-lg">
              Each and every one of us has that moment when we are suddenly
              stunned when we come face to face with the enormity of the
              universe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
            {step.map((item) => (
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="bg-[#DBDBDB] w-14 h-14 rounded-full flex items-center justify-center ">
                  <MdStar className="text-lg text-primary" />
                </div>
                <h1 className="text-2xl font-semibold text-primary">
                  {item.title}
                </h1>
                <p className="text-lg text-secondary !leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col items-start gap-5">
              <div className="bg-[#DBDBDB] w-14 h-14 rounded-full flex items-center justify-center ">
                <MdStar className="text-lg text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Heading
              </h1>
              <p className="text-lg text-secondary leading-snug">
                The beauty of astronomy is that anybody can do it. From the
                tiniest baby to the most advanced astrophysicist, there is
                something for anyone who wants to enjoy astronomy.
              </p>
              <a href="#" className="text-lg text-accent">
                Learn More
              </a>
            </div>
            <div className="flex items-center justify-center">
              <img src={iphone} alt="iphone" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container py-20">
          <div className="flex items-center gap-4 pb-12">
            <img src={lgo} alt="logo icon" />
            <h1 className="text-2xl font-bold">Sections</h1>
          </div>
          <div className="flex flex-col md:flex-row items-start  justify-between">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 px-10 md:px-0  ">
              <div className="space-y-6">
                <h3 className=" text-lg font-bold text-primary">Category </h3>
                <ul className="text-lg text-secondary space-y-2">
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className=" text-lg font-bold text-primary">Category </h3>
                <ul className="text-lg text-secondary space-y-2">
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className=" text-lg font-bold text-primary">Category </h3>
                <ul className="text-lg text-secondary space-y-2">
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                  <li>Frist Link</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-[50%] items-end ">
              <h1 className="text-xl font-bold text-primary py-2">
                Link Below
              </h1>
              <div className="flex items-center gap-2">
                <FaFacebook className="text-lg text-secondary" />
                <span className="text-lg font-semibold text-primary">
                  Facebook
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram className="text-lg text-secondary" />
                <span className="text-lg font-semibold text-primary">
                  Instagram
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaTwitter className="text-lg text-secondary" />
                <span className="text-lg font-semibold text-primary">
                  Twitter
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaYoutube className="text-lg text-secondary" />
                <span className="text-lg font-semibold text-primary">
                  Youtube
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#f7f7f7] py-4">
          <div className="container flex items-center justify-between">
            <div>
              <p className="text-xs text-secondary">
                © Copyright 2020 Pixsellz - Premium UI Goods for Designers
              </p>
            </div>
            <div>
              <ul className="flex items-center gap-x-4 text-xs text-secondary">
                <li>Frist Link</li>
                <li>Frist Link</li>
                <li>Frist Link</li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default App;
