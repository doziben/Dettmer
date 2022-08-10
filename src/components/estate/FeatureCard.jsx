import Card from "../UI/Card";

export default function FeatureCard(props) {
  return (
    <div className="px-4 py-6 flex hover:shadow-2xl bg-white gap-5 items-center">
      {props.icon}
      <div>
        <h1 className="text-2xl text-primary font-bold">{props.title}</h1>
        <p className="text-xs w-10/12 md:text-base ">{props.content}</p>
      </div>
    </div>
  );
}
