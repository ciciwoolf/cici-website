import React from "react";
import styles from "./art-item.module.css";


       
export const ArtItem = (props) => {
console.log(props)
  
       return (         
        <div>   
            <img className={styles.image} alt ={props.name} src={props.image}/>                  
        </div>  
      );
    }