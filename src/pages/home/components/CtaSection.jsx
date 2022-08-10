import CtaCard from "../../../components/estate/CtaCard";

const CtaItems = [
  {
    label: "Search Homes",
    title: "Buy a home",
    imgSrc: "/src/assets/images/CTA-Card-1.png",
  },
  {
    label: "We have made it easy",
    title: "Rent a home",
    imgSrc: "/src/assets/images/CTA-Card-2.png",
  },
  {
    label: "Over 1M successful sales",
    title: "Sell a home",
    imgSrc: "/src/assets/images/CTA-Card-3.png",
  },
];

export default function CtaSection() {
  return (
    <section className="flex flex-col gap-4 px-[6%] relative max-w-7xl mx-auto mb-10 mt-36 md:flex-row md:w-full">
      {CtaItems.map((e) => (
        <CtaCard title={e.title} label={e.label} imgSrc={e.imgSrc} />
      ))}
    </section>
  );
}
