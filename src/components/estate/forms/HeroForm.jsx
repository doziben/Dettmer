import { useRef } from "react";
import Card from "../../UI/Card";
import SelectInput from "./SelectInput";
import Button from "../../UI/Button";

export default function HeroForm() {
  const selectItems = [
    { id: "Hello", value: "Hello" },
    { id: "Atlanta", value: "Atlanta" },
    { id: "Hello", value: "Hello" },
  ];
  return (
    <Card
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="900"
      className="text-left absolute bottom-[-20%] min-w-[88vw] left-[6%] mb-8 z-10 md:top-[50% lg:p-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <SelectInput
          placeHolder="Residential"
          label="Property Type"
          values={selectItems}
        />
        <SelectInput
          placeHolder="Sale"
          label="Sale/Rent"
          values={selectItems}
        />
        <SelectInput
          placeHolder="California"
          label="Location"
          values={selectItems}
        />
        <SelectInput
          placeHolder="$100,000+"
          label="Price"
          values={selectItems}
        />
        <Button extraStyling="min-w-full  lg:w-min lg:min-w-0">Search</Button>
      </div>
    </Card>
  );
}
