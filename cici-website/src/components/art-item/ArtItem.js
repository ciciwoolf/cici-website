import React from "react";
import {Link} from 'react-router-dom';
import styles from "./art-item.module.css";

export const ArtItem = (props) => {
       return (         
        <div className={styles.wrapper}>   
            <img className={styles.image} alt ={props.name} src={props.image}/>
            <div className={styles.overlay}>
              <article className={styles.article}>
                <p className={styles.article__paragraph}>{props.name}</p>
                See more in the <Link className={styles.link} to="/gallery">Gallery</Link>  
              </article>
            </div>               
        </div>  
      );
    }