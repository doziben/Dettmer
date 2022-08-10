export default function HeadingText(props) {
  const styles = {
    container: `${props.center === true && "flex flex-col items-center"}`,
    heading: `text-b300 font-serif text-4xl lg:text-5xl ${props.center === true && "text-center"
      }`,
    line: `-mt-4`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{props.children}</h1><br />
      <svg
        className={styles.line}
        width="106"
        height="4"
        viewBox="0 0 106 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 2H106" stroke="#006AFF" stroke-width="3" />
      </svg>
    </div>
  );
}
