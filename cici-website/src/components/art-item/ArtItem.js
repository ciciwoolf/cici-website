import React from "react";
import styles from "./art-item.module.css";

      
export const ArtItem = (props) => {
console.log(props)
  
       return (         
        <div className={[styles.card, styles.card_small].join(' ')}>   
            <img src={props.image} className={styles.container_img} />
        </div>  
      );
    }