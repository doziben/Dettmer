export default function HamburgerIcon(props) {
  return (
    <button onClick={props.onClick} className=" lg:hidden trans">
      {props.active ?
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6357 13.6362L26.3637 26.3642" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
          <path d="M13.6357 26.3638L26.3637 13.6358" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
        </svg>

        :
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 15H29"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11 20H29"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11 25H29"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>}
    </button>
  );
}
