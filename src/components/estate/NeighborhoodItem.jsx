export default function NeighborhoodItem(props) {
  return (
    <div className="text-center">
      <h1>{props.title}</h1>
      <p>{props.listings} Listings</p>
      <img className="w-[]" src={props.imgSrc} alt="" />
    </div>
  );
}
