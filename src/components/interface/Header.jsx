import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../helpers/AppContext";

export default function Header(props) {
  const ctx = useContext(AppContext);
  let headerState = ctx.headerState;

  return (
    <>
      <header>
        <div>logo</div>
        {headerState && <nav></nav>}
      </header>
      {props.children}
    </>
  );
}
