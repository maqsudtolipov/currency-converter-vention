import Converter from "./feature/converter/Converter.tsx";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Converter />
      </div>
    </div>
  );
}

export default App;
