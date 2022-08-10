import { NavLink } from "react-router-dom";
import Logo from "../../assets/svg/Logo";
import { useContext, useState } from "react";
import AppContext from "../../helpers/AppContext";
import navlinks from "./navlinks";
import HamburgerIcon from "../../assets/svg/HamburgerIcon";
import navCta from "./navCta";
import routes from "../../pages/routes";

const ctaItems = navCta.map((link) => (
  <li>
    <NavLink to={link.to}>{link.title}</NavLink>
  </li>
));
const navItems = navlinks.map((link) => (
  <li>
    <NavLink activeStyle={{ color: "blue" }} to={link.to}>{link.title}</NavLink>
  </li>
));

export default function Header(props) {
  const ctx = useContext(AppContext);
  let headerState = ctx.headerState;
  const [navState, setNavState] = useState(false);

  const navHandler = () => {
    setNavState((prev) => {
      return !prev;
    });
  };

  const navClasses = {
    parent: `${navState && ""}`,
    children: `${navState && ""}`,
  };

  return (
    <>
      <header className="bg-white fixed z-50  w-full  mx-auto lg:py-5">
        <div className=" px-[6%] lg:px-[6%] py-4 flex justify-between items-center max-w-7xl mx-auto">
          <NavLink to={routes.main}>
            <Logo />
          </NavLink>

          {headerState && (
            <>
              <HamburgerIcon onClick={navHandler} />
              <nav className="hidden lg:flex  justify-between">
                <ul className="flex  gap-5 mx-48">{navItems}</ul>
              </nav>
              <ul className="hidden lg:flex gap-5">{ctaItems}</ul>
            </>
          )}
        </div>
      </header>
      {props.children}
    </>
  );
}
