export default function HamburgerIcon(props) {
  return (
    <button onClick={props.onClick}>
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
      </svg>
    </button>
  );
}