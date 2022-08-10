import { useState } from "react";
import Caret from "../../../assets/svg/Caret";

export default function SelectInput(props) {
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
    <div className="relative group">
      <p className="text-xs group-hover:text-primary">{props.label}</p>
      <button
        className="flex justify-between gap-3 w-full items-center font-bold text-base group-hover:text-primary"
        onClick={() => {
          setOpen((prev) => {
            return !prev;
          });
        }}
      >
        {selected !== "" ? selected : props.placeHolder} <Caret />{" "}
      </button>
      {open && (
        <ul className="p-3 absolute shadow-xl bg-white min-w-[18rem] z-30 dropdown">
          {values && values.map((e) => <Option id={e.id}>{e.value}</Option>)}
        </ul>
      )}
    </div>
  );
}
