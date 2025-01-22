import styles from "../components.style/card.module.scss";
import Card from "../components/card.jsx";
import { projects } from "../data.js";
import Header from "../components/header.jsx";

const main = () => {
  return (
    <div className={styles.mainCont}>
      <Header />
      <main className={styles.main}>
        {projects.map((project, i) => {
          return  <Card key={i} {...project} i={i} />;
        })}
      </main>
    </div>
  );
};

export default main;
