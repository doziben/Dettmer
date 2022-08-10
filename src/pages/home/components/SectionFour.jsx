import LocationIcon from "../../../assets/svg/LocationIcon";
import IconSelect from "../../../components/estate/forms/IconSelect";
import HeadingText from "../../../components/UI/HeadingText";
import NeighborhoodItem from "../../../components/estate/NeighborhoodItem";
import n1 from "../../../assets/images/n1.png";
import n2 from "../../../assets/images/n2.png";
import n3 from "../../../assets/images/n3.png";
import n4 from "../../../assets/images/n4.png";
import n5 from "../../../assets/images/n5.png";
import n6 from "../../../assets/images/n6.png";
import n7 from "../../../assets/images/n7.png";

import l1 from "../../../assets/images/l1.png";
import l2 from "../../../assets/images/l2.png";
import l3 from "../../../assets/images/l3.png";
import l4 from "../../../assets/images/l4.png";
import l5 from "../../../assets/images/l5.png";
import l6 from "../../../assets/images/l6.png";

const odd = [{ title: "Boston, MA", listings: "78", imgSrc: n3 }];

const images = [l1, l2, l3, l4, l5, l6];
const neighborhoods_1 = [
  { title: "Austin, TX", listings: "23", imgSrc: n1 },
  { title: "Atlanta, GA", listings: "15", imgSrc: n2 },
];

const neighborhoods_2 = [
  { title: "Oakland, CA", listings: "4", imgSrc: n4 },
  { title: "Brianna, CH", listings: "27", imgSrc: n5 },
];

const neighborhoods_3 = [
  { title: "San Fransisco", listings: "12", imgSrc: n6 },
  { title: "Scottsdale, AZ", listings: "7", imgSrc: n7 },
];

let neighbordata_1 = neighborhoods_1.map((e) => (
  <NeighborhoodItem
    key={e.title}
    title={e.title}
    listings={e.listings}
    imgSrc={e.imgSrc}
  />
));

let neighbordata_2 = neighborhoods_2.map((e) => (
  <NeighborhoodItem
    key={e.title}
    title={e.title}
    listings={e.listings}
    imgSrc={e.imgSrc}
  />
));

let neighbordata_3 = neighborhoods_3.map((e) => (
  <NeighborhoodItem
    key={e.title}
    title={e.title}
    listings={e.listings}
    imgSrc={e.imgSrc}
  />
));

let oddData = odd.map((e) => (
  <NeighborhoodItem
    key={e.title}
    title={e.title}
    listings={e.listings}
    imgSrc={e.imgSrc}
  />
));

const sponsors = images.map((e, index) => (
  <img key={index} className="w-[20%] lg:w-[8%]" alt="Sponsors" src={e} />
));
export default function SectionFour() {
  return (
    <section className="px-[6%] mx-auto flex flex-col gap-4 mb-6 max-w-7xl ">
      <HeadingText>
        Explore <br /> neighborhoods
      </HeadingText>
      <IconSelect placeHolder="USA" icon={<LocationIcon />} />

      <article className="lg:flex lg:flex-row  ">
        <div className="flex gap-2 mb-2 lg:mb-0 ">
          <div className="flex flex-col gap-2">{neighbordata_1}</div>
          <div className="mb-1 lg:mr-2">{oddData}</div>
        </div>

        <div className="">
          <div className="flex gap-2 justify-between">{neighbordata_2}</div>
          <div className="flex mt-2 gap-2 justify-between">
            {neighbordata_3}
          </div>
        </div>
      </article>

      <article className="overflow-x-scroll py-12 flex gap-2 mx-auto md:overflow-hidden md:justify-between  mt-10 md:gap-7">{sponsors}</article>
    </section>
  );
}
