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
    <NavLink to={link.to}>{link.title}</NavLink>
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
      <header className="bg-white fixed z-10 mx-auto w-full">
        <div className=" px-[6%] py-6 flex justify-between items-center">
          <div>
            <NavLink to={routes.main}>
              <Logo />
            </NavLink>
          </div>
          {headerState && (
            <nav className="">
              <HamburgerIcon onClick={navHandler} />
              <div className="hidden lg:flex  justify-between ">
                <ul className="flex justify-between">{navItems}</ul>
                <ul className="flex justify-between">{ctaItems}</ul>
              </div>
            </nav>
          )}
        </div>
      </header>
      {props.children}
    </>
  );
}
