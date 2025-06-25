import Converter from "./feature/converter/Converter.tsx";
import styles from "./App.module.scss";
import ConverterContextProvider from "./feature/converter/ConverterContext.tsx";

function App() {
  return (
    <ConverterContextProvider>
      <div className={styles.app}>
        <div className={styles.container}>
          <Converter />
        </div>
      </div>
    </ConverterContextProvider>
  );
}

export default App;
