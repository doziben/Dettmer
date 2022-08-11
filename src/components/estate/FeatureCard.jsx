import Card from "../UI/Card";

export default function FeatureCard(props) {
  return (
    <dl
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="900"
      className="group "
    >
      <div className="group-hover:-ml-6 px-4 py-6 flex hover:shadow-2xl bg-white gap-5 items-center trans">
        {props.icon}
        <dt className=" trans">
          <h1 className="text-2xl text-primary font-bold">{props.title}</h1>
          <p className="text-xs w-10/12 md:text-base ">{props.content}</p>
        </dt>
      </div>
    </dl>
  );
}
