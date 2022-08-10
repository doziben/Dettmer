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
    <div className="relative">
      <button
        className="flex gap-2 justify-between font-bold text-base items-center border border-b100 p-3"
        onClick={() => {
          setOpen((prev) => {
            return !prev;
          });
        }}
        onBlur={() => {
          setOpen((prev) => {
            let status = prev ? false : prev
            return status
          });
        }}
      >
        <span>{props.icon}</span>
        {selected !== "" ? selected : props.placeHolder} <Caret />{" "}
      </button>
      {open && (
        <ul className="p-3 absolute shadow-xl bg-white min-w-[18rem]">
          {values && values.map((e) => <Option id={e.id}>{e.value}</Option>)}
        </ul>
      )}
    </div>
  );
}
