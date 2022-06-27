import { useState } from "react";
import Caret from "../../../assets/svg/Caret";

export default function IconSelect(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const values = props.values;

  const selectHandler = (item) => {
    setSelected(item);
    props.onSelect(selected);
    setOpen((prev) => {
      return !prev;
    });
  };

  function Option(props) {
    return (
      <li className="p-2 hover:bg-bggrey w-full">
        <button
          className=""
          id={props.id}
          onClick={selectHandler.bind(this, props.id)}
        >
          {props.children}
        </button>
      </li>
    );
  }

  return (
    <div className="">
      <button
        className="flex justify-between w-full font-bold text-base"
        onClick={() => {
          setOpen((prev) => {
            return !prev;
          });
        }}
      >
        <span>{props.icon}</span>
        {selected !== "" ? selected : props.placeHolder} <Caret />{" "}
      </button>
      {open && (
        <ul className="p-3 absolute shadow-xl bg-white w-[90%]">
          {values && values.map((e) => <Option id={e.id}>{e.value}</Option>)}
        </ul>
      )}
    </div>
  );
}
