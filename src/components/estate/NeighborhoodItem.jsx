export default function NeighborhoodItem(props) {
  return (
    <section
      className="text-center relative group cursor-pointer"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="900"
    >
      <dl className="absolute top-[25%] left-[18%] md:top-[40%] md:left-[35%] z-10">
        <h1 className="text-white font-bold">{props.title}</h1>
        <dd className="text-white text-xs rounded-xl p-2 backdrop-blur-md">
          {props.listings} Listings
        </dd>
      </dl>

      <img
        className="w-[100%] group-hover:scale-[1.1] trans"
        src={props.imgSrc}
        alt="Dettmer Neighborhoods"
      />
    </section>
  );
}
