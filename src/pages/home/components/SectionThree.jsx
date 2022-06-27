import IconSelect from "../../../components/estate/forms/IconSelect";
import HeadingText from "../../../components/UI/HeadingText";
import Button from "../../../components/UI/Button";

const homes = [];

export default function SectionThree() {
  return (
    <section className="my-12 w-full bg-bggrey">
      <div className="py-8 mx-[6%]">
        <HeadingText center={true}>Explore homes</HeadingText>
        <div className="flex flex-col gap-6">
          <div className="flex"></div>
          <div className="overflow-hidden"></div>
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
}
