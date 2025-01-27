import Header from "../components/header";
import { Link } from "react-router-dom";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";
import { NoteBook } from "../notebooks";
import { Calender } from "../calender";

const Notebook = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>

          <Title title={"سالنامه ها"} />

          {NoteBook.map((item)=>(
            <ProductItem img={item.image} title={item.name} code={item.Pcode} desc={item.desc} type={item.type}/>
          ))}
          <Title title={"تقویم ها"} />

          {Calender.map((item)=>(
            <ProductItem img={item.image} title={item.name} code={item.Pcode} desc={item.desc} type={item.type}/>
          ))}
          

        </div>
      </div>
    </>
  );
};

export default Notebook;
