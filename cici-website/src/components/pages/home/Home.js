import React from "react";
// import React, {useState} from "react";
//import { Switch, Route } from "react-router-dom";
import styles from "./home.module.css";
import {ArtList} from "../../art";

// const isLargeScreen = () => window.innerWidth > 600 ? true : false

export const Home = () => {

  return (
    <div className={ styles.wrapper}>
        <section className={ styles.container}>
            <div className={styles.content}>
              <ArtList/>             
            </div>
            <div className={styles.sidebar}>
              <p className={styles.name}>Cici Woolf</p>
              <p className={styles.city}>Minneapolis --<br/>Buenos Aires
              </p>              

            </div>
                              
        </section>

        <footer className={ styles.footer}>             
            <div className={styles.gallery}>Gallery</div>   
            <div className={styles.contact}>Contact</div>         
        </footer>
    </div>
    
  );
};



{/* <Route exact path="/productdetail/:id" component={ProductDetail} /> */}