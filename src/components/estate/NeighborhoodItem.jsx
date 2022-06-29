export default function NeighborhoodItem(props) {
  return (
    <div className="text-center relative">
      <div className="absolute top-[25%] left-[18%]">
        <h1 className="text-white font-bold">{props.title}</h1>
        <p className="text-white text-xs rounded-xl p-2 backdrop-blur-md">
          {props.listings} Listings
        </p>
      </div>
      <img
        className="w-[100%]"
        src={props.imgSrc}
        alt="Dettmer Neighborhoods"
      />
    </div>
  );
}
