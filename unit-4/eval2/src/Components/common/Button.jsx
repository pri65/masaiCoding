import styles from "./Button.module.css";

function Button({children, handleStart}) {
  
  return (
    <button onClick={() =>handleStart() }className={styles.button} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
