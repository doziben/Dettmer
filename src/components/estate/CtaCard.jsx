import { motion } from "framer-motion";

export default function (props) {
  const bgImg = `bg-[url('${props.imgSrc}')]`;
  return (
    <div className=" mx-auto relative overflow-hidden group trans">
      <div className="shadow-md p-3 bg-white absolute w-[88%] top-[80%] left-[6%] right-[6%] group-hover:top-[70%] trans">
        <p className="text-xs">{props.label}</p>
        <h1 className="text-2xl text-primary font-bold">{props.title}</h1>
      </div>
      <img className="w-full bg md:min-w-fit group-hover:-mt-8 trans" src={props.imgSrc} alt="Buy a home from dettmer real estate" />
    </div>
  );
}
