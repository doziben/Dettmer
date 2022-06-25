export default function Card(props) {
  const styles = `z-15 p-4 bg-white shadow-xl ${props.className}`;

  return <div className={styles}>{props.children}</div>;
}
