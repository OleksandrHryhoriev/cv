import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
   return (
      <div className={styles.wrapper}>
         <Header />
         <div className={styles.container}>
            <Sidebar />
            <Main />
         </div>
      </div>
   );
}

export default App;
