import React from "react";
import styles from "./gallery.module.css";
import   { Link } from "react-router-dom";

export const Gallery = () => {

  return (
    <div className={ styles.wrapper}>
      <div className={styles.container}> 
        <h1>Gallery: Coming Soon.</h1>   
      </div>      
        <footer className={styles.footer}>             
            <div className={styles.footerLinks}>
              <Link className={styles.menu_bottom} to="/">Home</Link>  
              <Link className={[styles.menu_bottom, styles.menu_bottom_last].join(' ')} to="/contacts">Contact</Link>
            </div>         
        </footer>
    </div>
    
  );
};

