import React from "react";
import styles from "./contact.module.css";
import   { Link } from "react-router-dom";

export const Contact = () => {

  return (
    <div className={ styles.wrapper}>
      <div className={styles.container}> 
        <h1>Contact Form: Coming Soon.</h1>   
      </div>      
        <footer className={styles.footer}>             
            <div className={styles.footerLinks}>
              <Link className={styles.menu_bottom} to="/gallery">Gallery</Link>  
              <Link className={[styles.menu_bottom, styles.menu_bottom_last].join(' ')} to="/">Home</Link>
            </div>         
        </footer>
    </div>
    
  );
};

