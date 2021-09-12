import React from "react";
import styles from "./home.module.css";
import { ArtList } from "../../art";
import   { Link } from "react-router-dom";

export const Home = () => {

  return (
    <div className={ styles.wrapper}>
        <section className={ styles.container}>
            <div className={styles.content}><ArtList/></div>
            <div className={styles.sidebar}>
              <p className={styles.name}>Cici Woolf</p>
              <p className={styles.city}>Illustrations
              </p>            

              <p className={styles.city}>Minneapolis &<br/>Buenos Aires
              </p>              

            </div>
                              
        </section>

        <footer className={styles.footer}>             
            <div className={styles.footerLinks}>
              <Link className={styles.menu_bottom} to="/gallery">Gallery</Link>  
              <Link className={[styles.menu_bottom, styles.menu_bottom_last].join(' ')} to="/contacts">Contact</Link>
            </div>         
        </footer>
    </div>
    
  );
};



{/* <Route exact path="/productdetail/:id" component={ProductDetail} /> */}