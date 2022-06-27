import LocationIcon from "../../../assets/svg/LocationIcon";
import IconSelect from "../../../components/estate/forms/IconSelect";
import HeadingText from "../../../components/UI/HeadingText";
import NeighborhoodItem from "../../../components/estate/NeighborhoodItem";

const neighborhoods = [];

let neighbordata = neighborhoods.map((e) => (
  <NeighborhoodItem title={e.title} listings={e.listings} imgSrc={e.imgSrc} />
));

export default function SectionFour() {
  return (
    <section className="mx-[6%] w-full flex flex-col gap-4 mb-6">
      <HeadingText>
        Explore <br /> neighborhoods
      </HeadingText>
      <IconSelect placeHolder="USA" icon={<LocationIcon />} />
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
