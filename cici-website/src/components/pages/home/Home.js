import React from "react";
// import React, {useState} from "react";
//import { Switch, Route } from "react-router-dom";
import styles from "./home.module.css";
import {Art} from "../../art";

// const isLargeScreen = () => window.innerWidth > 600 ? true : false

export const Home = () => {

// const onResize = () => {
//   const normText = isLargeScreen();
//   setVisibility(normText);
// }

// const textTransform = () => {
//   const normText = isLargeScreen();
//   if (!normText) {
//     setVisibility(false);
//   }
// }

// window.onresize = onResize;
// const [isVisible, setVisibility] = useState(isLargeScreen());


  return (
    <body className={ styles.wrapper}>
        <section className={ styles.container}>
            <div className={styles.d1}><Art/></div>
            <div className={styles.d2}>
              <p className={styles.name}>Cici Woolf</p>
              <p className={styles.city}>Minneapolis --
              {"\n"}Buenos Aires
              </p>              

            </div>
                              
        </section>

        <section className={ styles.container2}>           
            <div className={styles.contact}>Contact</div>           
        </section>
    </body>
    
  );
};



{/* <Route exact path="/productdetail/:id" component={ProductDetail} /> */}