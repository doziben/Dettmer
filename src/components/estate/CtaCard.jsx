import { motion } from "framer-motion";

export default function (props) {
  const bgImg = `bg-[url('${props.imgSrc}')]`;
  return (
    <div className=" mx-auto relative overflow-hidden">
      <div className="shadow-md p-3 bg-white absolute w-[88%] top-[80%] left-[6%] right-[6%]">
        <p className="text-xs">{props.label}</p>
        <h1 className="text-2xl text-primary font-bold">{props.title}</h1>
      </div>
      <img className="w-full bg md:min-w-fit" src={props.imgSrc} alt="Buy a home from dettmer real estate" />
    </div>
  );
}
