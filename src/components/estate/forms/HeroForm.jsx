import { useRef } from "react";
import Card from "../../UI/Card";
import SelectInput from "./selectInput";
import Button from "../../UI/Button";

export default function HeroForm() {
  const selectItems = [
    { id: "Hello", value: "Hello" },
    { id: "Atlanta", value: "Atlanta" },
    { id: "Hello", value: "Hello" },
  ];
  return (
    <Card className="text-left absolute bottom-[-20%] min-w-[88vw] left-[6%] mb-8 z-10 md:top-[50% lg:p-6 ">
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
        <Button>Search</Button>
      </div>
    </Card>
  );
}
