import Header from "../components/header";
import { Link } from "react-router-dom";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";
import { NoteBook } from "../notebooks.js";
import { Calender } from "../calender.js";

const Gift = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"سالنامه"} />
          {NoteBook.map((item)=>(
            <ProductItem img={item.image} title={item.name} code={item.Pcode} />
          ))}
          <Title title={"تقویم"} />
          {Calender.map((item)=>(
            <ProductItem img={item.image} title={item.name} code={item.Pcode} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gift;
