import heroImg from "../../assets/images/HeroImg.png";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="text"></div>
      <div className="mt-20 absolute h-[70rem] w-full overflow-hidden bg-center">
        <img
          className="object-fill max-w-none bg-center"
          src={heroImg}
          alt="Dettmer Real Estate Website Hero section"
        />
      </div>
    </section>
  );
}
