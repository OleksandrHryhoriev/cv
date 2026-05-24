import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
   return (
      <div className={styles.wrapper}>
         <Header />
         <div className={styles.container}>
            <Sidebar />
         </div>
      </div>
   );
}

export default App;
