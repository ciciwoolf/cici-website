import React from "react";
import styles from "./selected-art.module.css";
       
export const SelectedArtItem = (props) => {
console.log(props)
  
       return (         
        <div className={styles.wrapper}>   
            <img className={styles.image} alt ={props.name} src={props.image}/>                  
        </div>  
      );
    }