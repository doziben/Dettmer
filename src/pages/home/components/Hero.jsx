import HeroForm from "../../../components/estate/forms/HeroForm";
import bgImg from "../../../assets/images/HeroImg.png"

export default function Hero() {

  const styles = `mt-auto text-center h-[40rem] bg-cover w-full overflow-hidden bg-center bg-[url('${bgImg}')]`
  return (
    <section className="w-full relative">
      <div className={styles}>
        <div className="mt-[50%] md:mt-[20%] 2xl:mt-[10%]">
          <p className="text-cx text-white">TAILORED TO YOUR NEEDS</p>
          <h1 className=" font-serif text-4xl text-white lg:text-6xl">
            Find the Best Smart <br />
            Real Estate
          </h1>
        </div>
      </div>
      <HeroForm />
    </section>
  );
}
