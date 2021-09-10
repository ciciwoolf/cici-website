import React from "react";
import { ArtItem } from "../art-item/ArtItem";
import styles from "./artList.module.css"
import { MiscWorks } from "../../data/data"

export const ArtList = () => {

  return (    
     <div className={styles.wrapper}>
       {
        MiscWorks.map((item) => (
          <ArtItem
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name} 
          /> 
     ))}         
    </div>    
    
  )
}

