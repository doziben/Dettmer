import { Link } from "react-router-dom";

export default function EstateItem(props) {
  return (
    <Link to="/">
      <div className="w-72 max-h-[26rem] bg-white p-3 m-2 flex flex-col gap-4 shadow-sm">
        <img className="h-52 aspect-auto" src={props.imgSrc} alt="" />
        <div className="flex flex-col gap-2">
          <p>{props.type}</p>
          <div>
            <h1 className="text-2xl">{props.price}</h1>
            <p className="text-sm">{props.description}</p>
          </div>
          <p>
            {props.beds}beds {props.baths}baths
          </p>
        </div>
      </div>
    </Link>
  );
}
