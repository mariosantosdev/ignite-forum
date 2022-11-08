import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./styles/app.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Mário Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
          <Post
            author="Mário Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
