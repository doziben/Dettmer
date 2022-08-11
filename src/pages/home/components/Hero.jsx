import HeroForm from "../../../components/estate/forms/HeroForm";
import bgImg from "../../../assets/images/HeroImg.png";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  const styles = `mt-auto text-center h-[40rem] bg-cover w-full overflow-hidden bg-center`;
  return (
    <section className="w-full relative">
      {/* Main Hero */}
      <article
        style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
        className={`${styles}`}
      >
        {/* Text Wrapper */}
        <Parallax translateY={[-70, 30]}>
          <dl className="mt-[50%] md:mt-[20%] 2xl:mt-[10%]">
            <dt className="text-cx text-white">TAILORED TO YOUR NEEDS</dt>
            <h1 className=" font-serif text-4xl text-white lg:text-6xl">
              Find the Best Smart <br />
              Real Estate
            </h1>
          </dl>
        </Parallax>
      </article>

      <HeroForm />
    </section>
  );
}
