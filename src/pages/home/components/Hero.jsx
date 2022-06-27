import HeroForm from "../../../components/estate/forms/HeroForm";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mt-auto text-center h-[40rem] bg-cover w-full overflow-hidden bg-center bg-hero-img">
        <div className="mt-[50%]">
          <p className="text-cx text-white">TAILORED TO YOUR NEEDS</p>
          <h1 className=" font-serif text-4xl text-white">
            {" "}
            Find the Best Smart <br />
            Real Estate
          </h1>
        </div>
      </div>
      <HeroForm />
    </section>
  );
}
