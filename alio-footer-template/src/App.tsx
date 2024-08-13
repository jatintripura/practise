import logo from "./assets/Vector.png";
import location from "./assets/location_on.png";
import email from "./assets/email.png";
import call from "./assets/call.png";
function App() {
  return (
    <div className="container mx-auto py-20 flex items-center flex-col gap-y-20">
      //frist section
      <section className="bg-bacground flex items-start justify-between w-[1440px] py-[80px] px-[104px] ">
        <div className="w-[222px] flex flex-col gap-y-5">
          <div className="flex gap-x-2 items-center">
            <span>
              <img src={logo} alt="" />
            </span>
            <span className="text-base font-bold text-primary ">
              Satyamstudio
            </span>
          </div>
          <div className="flex items-start justify-center gap-x-4">
            <span>
              <img className="w-6 h-6" src={location} alt="location-logo" />
            </span>
            <span className="text-base text-secondary">
              8819 Ohio St. South Gate, CA 90280
            </span>
          </div>
          <div className="flex items-center justify-start gap-x-4">
            <span>
              <img className="w-6 h-6" src={email} alt="location-logo" />
            </span>
            <span className="text-base text-secondary">
              Ourstudio@hello.com
            </span>
          </div>
          <div className="flex items-center justify-start gap-x-4">
            <span>
              <img src={call} className="w-6 h-6" alt="location-logo" />
            </span>
            <span className="text-base text-secondary">+1 386-688-3295 </span>
          </div>
        </div>
        <div className="w-[115px] space-y-5">
          <h3 className="text-base font-bold text-primary">Service</h3>
          <ul className="text-base text-secondary space-y-5 font-normal">
            <li>Illustration</li>
            <li>Mobile Design</li>
            <li>Motion Graphic</li>
            <li>Web Design</li>
            <li>Development</li>
            <li>SEO</li>
          </ul>
        </div>
        <div className="w-[80px] space-y-5">
          <h3 className="text-base font-bold text-primary">Company</h3>
          <ul className="text-base text-secondary space-y-5 font-normal">
            <li>Services</li>
            <li>Features</li>
            <li>Our Team</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-[130px] space-y-5">
          <h3 className="text-base font-bold text-primary">Our Social Media</h3>
          <ul className="text-base text-secondary space-y-5 font-normal">
            <li>Dribble</li>
            <li>Behance</li>
            <li>Medium</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="w-[300px] space-y-5">
          <h3 className="text-base font-bold text-primary">
            Join a Newsletter
          </h3>
          <div className="flex flex-col gap-y-2">
            <label className="text-secondary text-base">Your Email </label>
            <input
              type="email"
              className="outline-none py-3 px-4 w-[295px]"
              placeholder="Enter your mail"
            />
          </div>
          <button className="text-[#fff] bg-primary py-[16px] px-[48px] rounded-sm">
            Send
          </button>
          <h3 className="text-base text-secondary">Copyright by devloper</h3>
        </div>
      </section>
      //second section
      <section className="bg-bacground flex flex-col gap-y-6 items-center justify-center  w-[1440px] py-[80px] px-[104px] ">
        <div className="flex gap-x-2 items-center">
          <span>
            <img src={logo} alt="" />
          </span>
          <span className="text-base font-bold text-primary ">
            Satyamstudio
          </span>
        </div>
        <div className="flex flex-col gap-y-10 items-center justify-center">
          <div>
            <ul className="text-base text-secondary flex gap-x-12">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex gap-x-4">
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Dr
            </div>
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Be
            </div>
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Lg
            </div>
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Tw
            </div>
          </div>
          <div className="w-full border border-[#76AEFF]"></div>
          <div>
            <h3 className="text-base text-secondary">Copyright by devloper</h3>
          </div>
        </div>
      </section>
      //Third section
      <section className="bg-bacground flex items-start justify-between w-[1440px] py-[80px] px-[104px] ">
        <div className="w-[210px] space-y-5">
          <div className="flex gap-x-2 items-center">
            <span>
              <img src={logo} alt="icon-logo " />
            </span>
            <span className="text-base font-bold text-primary ">
              Satyamstudio
            </span>
          </div>
          <p className="text-base text-secondary">
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </p>
          <h3 className="text-base text-[#283646]">Copyright by devloper</h3>
        </div>
        <div className="w-[222px] flex flex-col gap-y-5">
          <div>
            <h3 className="text-base font-bold text-primary">Get In Touch</h3>
          </div>
          <div className="flex items-start justify-center gap-x-4">
            <span>
              <img className="w-6 h-6" src={location} alt="location-logo" />
            </span>
            <span className="text-base text-secondary">
              8819 Ohio St. South Gate, CA 90280
            </span>
          </div>
          <div className="flex items-center justify-start gap-x-4">
            <span>
              <img className="w-6 h-6" src={email} alt="location-logo" />
            </span>
            <span className="text-base text-secondary">
              Ourstudio@hello.com
            </span>
          </div>
          <div className="flex items-center justify-start gap-x-4">
            <span>
              <img src={call} className="w-6 h-6" alt="location-logo" />
            </span>
            <span className="text-base text-secondary">+1 386-688-3295 </span>
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-center justify-center gap-y-6">
          <div className="flex gap-x-4 w-full">
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Dr
            </div>
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Be
            </div>
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Lg
            </div>
            <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
              Tw
            </div>
          </div>
          <div className="text-base text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            doloribus.
          </div>
        </div>

        <div className="w-[300px] space-y-5">
          <h3 className="text-base font-bold text-primary">
            Join a Newsletter
          </h3>
          <div className="flex flex-col gap-y-2">
            <label className="text-secondary text-base">Your Email </label>
            <input
              type="email"
              className="outline-none py-3 px-4 w-[295px]"
              placeholder="Enter your mail"
            />
          </div>
          <button className="text-[#fff] bg-primary py-[16px] px-[48px] rounded-sm">
            Send
          </button>
          <h3 className="text-base text-secondary">Copyright by devloper</h3>
        </div>
      </section>
      //four section
      <section>
        <section className="bg-bacground flex items-start justify-between w-[1440px] py-[80px] px-[104px] ">
          <div className="w-[210px] space-y-5">
            <div className="flex gap-x-2 items-center">
              <span>
                <img src={logo} alt="icon-logo " />
              </span>
              <span className="text-base font-bold text-primary ">
                Satyamstudio
              </span>
            </div>
            <p className="text-base text-secondary">
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
            <h3 className="text-base text-[#283646]">Copyright by devloper</h3>
          </div>
          <div className="w-[222px] flex flex-col gap-y-5">
            <div>
              <h3 className="text-base font-bold text-primary">Get In Touch</h3>
            </div>
            <div className="flex items-start justify-center gap-x-4">
              <span>
                <img className="w-6 h-6" src={location} alt="location-logo" />
              </span>
              <span className="text-base text-secondary">
                8819 Ohio St. South Gate, CA 90280
              </span>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <span>
                <img className="w-6 h-6" src={email} alt="location-logo" />
              </span>
              <span className="text-base text-secondary">
                Ourstudio@hello.com
              </span>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <span>
                <img src={call} className="w-6 h-6" alt="location-logo" />
              </span>
              <span className="text-base text-secondary">+1 386-688-3295 </span>
            </div>
          </div>
          <div className="w-[115px] space-y-5">
            <h3 className="text-base font-bold text-primary">Service</h3>
            <ul className="text-base text-secondary space-y-5 font-normal">
              <li>Illustration</li>
              <li>Mobile Design</li>
              <li>Motion Graphic</li>
              <li>Web Design</li>
              <li>Development</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="w-[80px] space-y-5">
            <h3 className="text-base font-bold text-primary">Company</h3>
            <ul className="text-base text-secondary space-y-5 font-normal">
              <li>Services</li>
              <li>Features</li>
              <li>Our Team</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-[200px] flex flex-col items-start justify-center gap-y-6">
            <div className="flex gap-x-4">
              <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
                Dr
              </div>
              <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
                Be
              </div>
              <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
                Lg
              </div>
            </div>
            <div className="text-base text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus.
            </div>
          </div>
        </section>
      </section>
      //five section
      <section>
        <section className="bg-bacground   w-[1440px] py-[80px] px-[104px] ">
          <div className="flex items-start justify-between">
            <div className="w-[210px] space-y-5">
              <div className="flex gap-x-2 items-center">
                <span>
                  <img src={logo} alt="icon-logo " />
                </span>
                <span className="text-base font-bold text-primary ">
                  Satyamstudio
                </span>
              </div>
              <p className="text-base text-secondary">
                OurStudio is a digital agency UI / UX Design and Website
                Development located in Ohio, United States of America
              </p>
              <h3 className="text-base text-[#283646]">
                Copyright by devloper
              </h3>
            </div>
            <div className="w-[115px] space-y-5">
              <h3 className="text-base font-bold text-primary">Service</h3>
              <ul className="text-base text-secondary space-y-5 font-normal">
                <li>Illustration</li>
                <li>Mobile Design</li>
                <li>Motion Graphic</li>
                <li>Web Design</li>
                <li>Development</li>
                <li>SEO</li>
              </ul>
            </div>
            <div className="w-[80px] space-y-5">
              <h3 className="text-base font-bold text-primary">Company</h3>
              <ul className="text-base text-secondary space-y-5 font-normal">
                <li>Services</li>
                <li>Features</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-[460px] space-y-5">
              <h3 className="text-base font-bold text-primary">
                Join a Newsletter
              </h3>
              <div className="flex items-end gap-x-4">
                <div className="flex  flex-col gap-y-2">
                  <label className="text-secondary text-base">
                    Your Email{" "}
                  </label>
                  <input
                    type="email"
                    className="outline-none py-3 px-4 w-[295px]"
                    placeholder="Enter your mail"
                  />
                </div>
                <div>
                  <button className="text-[#fff] bg-primary py-3 px-[48px] rounded-sm font-bold">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
                  Dr
                </div>
                <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
                  Be
                </div>
                <div className="w-10 h-10 text-[#fff] font-bold bg-primary rounded-full flex items-center justify-center">
                  Lg
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <hr className="text-[#76AEFF] border " />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[50%]">
              {" "}
              <h3 className="text-base text-secondary">
                Copyright by devloper
              </h3>
            </div>
            <div className="flex gap-x-2 items-start">
              <div className="flex items-start justify-center gap-x-6">
                <span>
                  <img className="w-6 h-6" src={location} alt="location-logo" />
                </span>
                <span className="text-base text-secondary w-[180px]">
                  8819 Ohio St. South Gate, CA 90280
                </span>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <span>
                  <img className="w-6 h-6" src={email} alt="location-logo" />
                </span>
                <span className="text-base text-secondary">
                  Ourstudio@hello.com
                </span>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <span>
                  <img src={call} className="w-6 h-6" alt="location-logo" />
                </span>
                <span className="text-base text-secondary">
                  +1 386-688-3295{" "}
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
