import React from "react";
import CardList from "../../components/cardlist/CardList";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.content}>
      <CardList />
      <ImageComponent />
    </div>
  );
};

export default HomePage;
