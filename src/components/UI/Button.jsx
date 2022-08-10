export default function Button(props) {
  const styles = `px-10 py-4 bg-primary text-white w-fit ${props.extraStyling}`
  return (
    <button
      className={styles}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
