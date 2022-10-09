import { h } from "preact";
import Button from "./components/Button";
import styles from "./styles.module.less";

export function Page() {
  return (
    <div className={styles.page}>
      <h1>Mini-Components</h1>
      <div>
        <Button />
      </div>
    </div>
  );
}
