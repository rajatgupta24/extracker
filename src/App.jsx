import React from "react";

import Home from "./pages/home/Home";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Home />
      </div>
    </div>
  );
};

export default App;
