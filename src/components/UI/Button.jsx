export default function Button(props) {
  return (
    <button
      className="px-10 py-4 bg-primary text-white"
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
