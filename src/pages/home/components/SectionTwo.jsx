import HeadingText from "../../../components/UI/HeadingText";
import FeatureCard from "../../../components/estate/FeatureCard";
import MoneyIcon from "../../../assets/svg/MoneyIcon";
import LocationIcon from "../../../assets/svg/LocationIcon";
import HomeIcon from "../../../assets/svg/HomeIcon";
import s1 from "../../../assets/images/s2-1.png";
import s2 from "../../../assets/images/s2-2.png";
import s3 from "../../../assets/images/s2-3.png";

const features = [
  {
    title: "Any City",
    content: "Find and purchase homes from any city of your choice",
    icon: <LocationIcon />,
  },
  {
    title: "Sale Types",
    content: "We make it easy for you to find homes by using sale types",
    icon: <HomeIcon />,
  },
  {
    title: "Budget Friendly",
    content: "Easily find the home of your choice and affordability",
    icon: <MoneyIcon />,
  },
];

export default function SectionTwo() {
  return (
    <section className="my-16 mx-[6%]">
      <HeadingText>
        Built for your <br /> needs
      </HeadingText>
      <div className="flex flex-col">
        <div className="relative">
          <img className="relative" src={s1} alt="" />
          <img className="absolute top-0 left-20 w-[70%]" src={s2} alt="" />
          <img className="absolute top-[50%] w-1/2" src={s3} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          {features.map((e) => (
            <FeatureCard title={e.title} content={e.content} icon={e.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
