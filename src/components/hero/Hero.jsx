import imageHeroDesktop from "../../assets/image-hero-desktop.png";
import imageHeroMobile from "../../assets/image-hero-mobile.png";
import svg1 from "../../assets/client-databiz.svg";
import svg2 from "../../assets/client-audiophile.svg";
import svg3 from "../../assets/client-meet.svg";
import svg4 from "../../assets/client-maker.svg";

const Hero = () => {
  return (
    <section className=" mt-20 flex items-start gap-20 max-md:flex-col-reverse justify-center ">
      <div className="p-20 flex flex-col gap-20 max-md:justify-center items-center px-0">
        <h1 className="text-7xl font-bold text-almostBlack max-md:text-3xl">
          Make remote work
        </h1>

        <p className="text-almostGray max-md:text-center">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="self-start bg-almostBlack text-white p-3 rounded-lg w-40 border-[1.5px] border-almostBlack transition-all hover:bg-transparent hover:text-almostBlack max-md:self-center">
          Learn more
        </button>
        <div className="w-full flex items-center justify-between flex-wrap gap-5">
          <img src={svg1} alt="" />
          <img src={svg2} alt="" />
          <img src={svg3} alt="" />
          <img src={svg4} alt="" />
        </div>
      </div>
      <div>
        <img className="max-md:hidden" src={imageHeroDesktop} alt="" />
        <img
          className="w-full hidden max-md:block"
          src={imageHeroMobile}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
