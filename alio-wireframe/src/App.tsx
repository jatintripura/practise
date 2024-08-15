import React from "react";
import Title from "./components/ui/Title";
import logo from "./assets/logo.png";
import Button from "./components/Button";
import hero from "./assets/background.png";
import icon from "./assets/icon.png";
import logitech from "./assets/logitech.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import linkdin from "./assets/linkdin.png";
import philip from "./assets/philips.png";
import { FiMenu } from "react-icons/fi";
import Paragraph from "./components/ui/Paragraph";
import device from "./assets/Device.png";
const App: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <section className="flex items-center justify-between py-6">
          <div className="flex items-center gap-x-7">
            <img src={logo} alt="logo" />
            <ul className="mobile:hidden    desktop:flex gap-x-7   ">
              <li className="hover:underline">
                <a href="#">
                  <Title fontWeight="normal">Frist Link</Title>
                </a>
              </li>
              <li className="hover:underline">
                <a href="#">
                  <Title fontWeight="normal">Second Link</Title>
                </a>
              </li>
              <li className="hover:underline">
                <a href="#">
                  <Title fontWeight="normal">Third Link</Title>
                </a>
              </li>
              <li className="hover:underline">
                <a href="#">
                  <Title fontWeight="normal">Four Link</Title>
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile:hidden desktop:flex items-center gap-x-4">
            <a className="hover:underline" href="#">
              <Title fontWeight="normal" className="text-secondary">
                Five Link
              </Title>
            </a>
            <Button className="flex gap-x-4 items-center">
              <span>Button</span>
              <span>
                <img src={icon} alt="button-icon" />
              </span>
            </Button>
          </div>
          <div className="desktop:hidden">
            <span>
              <FiMenu className="w-10 h-auto" />
            </span>
          </div>
        </section>
        <section className="pt-10">
          <div className="mobile:flex flex-col items-start gap-y-5 desktop:flex-row  desktop:items-center justify-around">
            <div className="w-full desktop:w-[50%]">
              <img src={hero} alt="hero-image" />
            </div>
            <div className="flex flex-col gap-y-5 w-[70%] desktop:w-[50%]">
              <Title
                fontWeight="bold"
                className="mobile:text-4xl desktop:text-5xl"
              >
                Two line long header example for web
              </Title>
              <Paragraph className="text-paragraph">
                So youre trying to surf a site like myspace, hotmail or yahoo
                mail from work or school and its blocked
              </Paragraph>
              <div>
                <Button>Button</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-5 pt-10 w-full">
            <Title fontWeight="bold">Partners</Title>
            <div className="w-full flex flex-wrap items-center justify-around  gap-x-4 gap-y-4 ">
              <div>
                <img src={logitech} alt="logitech-icon" />
              </div>
              <div>
                <img src={google} alt="google-icon" />
              </div>
              <div>
                <img src={facebook} alt="facebook-icon" />
              </div>
              <div>
                <img src={linkdin} alt="linkdin-icon" />
              </div>
              <div>
                <img src={philip} alt="philip-icon" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center gap-x-16 pt-20">
          <div className="flex flex-col gap-5 items-center w-1/2">
            <Title fontWeight="bold" className="text-sm text-center">
              caps heading
            </Title>
            <Title className="text-5xl" fontWeight="bold">
              Two line long header example for web
            </Title>
            <Paragraph className="text-paragraph">
              You will likely be required to install the fixed mounts. These are
              what will keep the apparatus stable and secure with your computer
              monitor in it. Follow directions carefully so that you can be sure
              to get everything.
            </Paragraph>
            <Button variant="outline" className=" text-primary">
              Learn More
            </Button>
          </div>
          <div>
            <img src={device} alt="device" />
          </div>
        </section>
      </div>
    </>
  );
};
export default App;
