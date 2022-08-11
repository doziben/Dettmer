import CtaCard from "../../../components/estate/CtaCard";
import CTA1 from "../../../../src/assets/images/CTA-Card-1.png";
import CTA2 from "../../../../src/assets/images/CTA-Card-2.png";
import CTA3 from "../../../../src/assets/images/CTA-Card-3.png";

const CtaItems = [
  {
    label: "Search Homes",
    title: "Buy a home",
    imgSrc: CTA1,
  },
  {
    label: "We have made it easy",
    title: "Rent a home",
    imgSrc: CTA2,
  },
  {
    label: "Over 1M successful sales",
    title: "Sell a home",
    imgSrc: CTA3,
  },
];

export default function CtaSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="900"
      className="flex flex-col gap-4 px-[6%] relative max-w-7xl mx-auto mb-10 mt-36 md:flex-row md:w-full"
    >
      {CtaItems.map((e) => (
        <CtaCard title={e.title} label={e.label} imgSrc={e.imgSrc} />
      ))}
    </section>
  );
}
