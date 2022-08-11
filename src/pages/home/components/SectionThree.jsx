import IconSelect from "../../../components/estate/forms/IconSelect";
import HeadingText from "../../../components/UI/HeadingText";
import Button from "../../../components/UI/Button";
import LocationIcon from "../../../assets/svg/LocationIcon";
import EstateItem from "../../../components/estate/EstateItem";
import HomeIcon from "../../../assets/svg/HomeIcon";
import re1 from "../../../assets/images/re1.png";
import re2 from "../../../assets/images/re2.png";
import re3 from "../../../assets/images/re3.png";
import re4 from "../../../assets/images/re4.png";
import { Autoplay, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const homes = [
  { id: "Hello", value: "Hello" },
  { id: "Atlanta", value: "Atlanta" },
  { id: "Hello", value: "Hello" },
];

const estates = [
  {
    imgSrc: re1,
    type: "APARTMENT",
    price: "$220,000",
    description: "1682 N Ave NW, Atlanta, GA 30314",
    beds: "3",
    baths: "4",
  },
  {
    imgSrc: re2,
    type: "BUILDING",
    price: "$649,900",
    description: "1785 Indiana Ave, Atlanta, GA 30307",
    beds: "3",
    baths: "2",
  },
  {
    imgSrc: re3,
    type: "APARTMENT",
    price: "$326,990",
    description: "2417 Connally Dr,East Pt, GA 30344",
    beds: "5",
    baths: "3",
  },
  {
    imgSrc: re4,
    type: "APARTMENT",
    price: "$449,528",
    description: "Poplar Place by Fischer, GA 30157",
    beds: "2",
    baths: "2",
  },
  {
    imgSrc: re1,
    type: "APARTMENT",
    price: "$220,000",
    description: "1682 N Ave NW, Atlanta, GA 30314",
    beds: "3",
    baths: "4",
  },
  {
    imgSrc: re2,
    type: "BUILDING",
    price: "$649,900",
    description: "1785 Indiana Ave, Atlanta, GA 30307",
    beds: "3",
    baths: "2",
  },
  {
    imgSrc: re3,
    type: "APARTMENT",
    price: "$326,990",
    description: "2417 Connally Dr,East Pt, GA 30344",
    beds: "5",
    baths: "3",
  },
  {
    imgSrc: re4,
    type: "APARTMENT",
    price: "$449,528",
    description: "Poplar Place by Fischer, GA 30157",
    beds: "2",
    baths: "2",
  },
  {
    imgSrc: re1,
    type: "APARTMENT",
    price: "$220,000",
    description: "1682 N Ave NW, Atlanta, GA 30314",
    beds: "3",
    baths: "4",
  },
  {
    imgSrc: re2,
    type: "BUILDING",
    price: "$649,900",
    description: "1785 Indiana Ave, Atlanta, GA 30307",
    beds: "3",
    baths: "2",
  },
  {
    imgSrc: re3,
    type: "APARTMENT",
    price: "$326,990",
    description: "2417 Connally Dr,East Pt, GA 30344",
    beds: "5",
    baths: "3",
  },
  {
    imgSrc: re4,
    type: "APARTMENT",
    price: "$449,528",
    description: "Poplar Place by Fischer, GA 30157",
    beds: "2",
    baths: "2",
  },
];

let estateList = estates.map((e) => (
  <SwiperSlide key={Math.random().toString()}>
    <EstateItem
      imgSrc={e.imgSrc}
      type={e.type}
      description={e.description}
      price={e.price}
      beds={e.beds}
      baths={e.baths}
    />
  </SwiperSlide>
));
export default function SectionThree() {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="900"
      className="my-12 w-full bg-bggrey  "
    >
      <div className="py-8 px-[6%] max-w-7xl mx-auto">
        <HeadingText center={true}>Explore homes</HeadingText>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex w-full p-3 justify-center">
            <IconSelect
              values={homes}
              placeHolder="Location"
              icon={<LocationIcon />}
            />

            <IconSelect
              values={homes}
              placeHolder="Property"
              icon={<HomeIcon />}
            />
          </div>
          {/* Mobile*/}
          <Swiper
            loop
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{ delay: 2000 }}
            modules={[Pagination, Autoplay]}
            className="mySwiper lg:hidden"
          >
            {estateList}
          </Swiper>

          {/* Web */}
          <Swiper
            loop
            slidesPerView={4}
            centeredSlides={true}
            autoplay={{ delay: 2000 }}
            modules={[Pagination, Autoplay]}
            className="mySwiper hidden lg:block"
          >
            {estateList}
          </Swiper>
          <Button extraStyling="mx-auto">View All</Button>
        </div>
      </div>
    </section>
  );
}
