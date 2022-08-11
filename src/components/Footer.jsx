import { Link } from "react-router-dom";
import footerImg from "../assets/images/FooterImg.png";
import Logo from "../assets/svg/Logo";
//define bg in tailwind

export default function Footer() {
  return (
    <footer
      className="bg-[#2A2A33] w-full py-20 "
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="900"
    >
      <div className="px-[6%] mx-auto flex flex-col gap-8 max-w-7xl  lg:flex-row  lg:justify-between text-white">
        {/* Logo */}
        <Logo footer />

        {/* Discover */}
        <dl>
          <dt className="text-lg font-bold">Discover </dt>
          <dd className="opacity-[80%] hover:text-primary my-3">
            <Link>Buy/ Rent Homes</Link>
          </dd>
          <dd className="opacity-[80%] hover:text-primary my-3">
            <Link>Sell Homes</Link>
          </dd>
          <dd className="opacity-[80%] hover:text-primary my-3">
            <Link>Neighborhoods</Link>
          </dd>
        </dl>

        {/* Contact Us */}
        <dl>
          <dt className="text-lg font-bold">Contact Us</dt>
          <dd className="opacity-[80%] hover:text-primary my-3">
            <Link to="mailto:doziben@gmail.com">hello@dettmer.com</Link>
          </dd>
          <dd className="opacity-[80%] hover:text-primary my-3">
            <Link>555-555-5555</Link>
          </dd>

          <div className="my-6 flex gap-6">{/* Socials */}</div>
        </dl>

        <div></div>
      </div>
    </footer>
  );
}
