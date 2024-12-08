import { Element } from "react-scroll";
import { faq } from "../constants";
import FaqItem from "./FaqItem";

const Faq = () => {
  const x = faq.length / 2;
  const halfLength = Math.floor(x);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 mb-7 max-w-[640px] text-p4 max-lg:max-w-md">
              curiosity didn't kill the cat, it gave it answer
            </h3>
            <p>you've got questins, we've got answers </p>
          </div>

          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} faq={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} faq={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
