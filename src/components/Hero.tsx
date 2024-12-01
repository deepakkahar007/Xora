import { Element, Link as ScrollLink } from "react-scroll";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32 max-md:pt-36">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              view Editing
            </div>
            <h1 className="h1 max-lg:h2 mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simply
            </h1>
            <p className="body-1 mb-40 max-w-440 max-md:mb-10">
              we desinged XORA Ai video editing to an easy to use, quick to
              learn, and surprisingly powerfull
            </p>

            <ScrollLink to="feature" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it Now</Button>
            </ScrollLink>
          </div>
          <div className="hero-img_res pointer-events-none absolute -top-32 left-[calc(50%-340px)] w-[1230px]">
            <img
              src="/images/hero.png"
              alt="hero image"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
