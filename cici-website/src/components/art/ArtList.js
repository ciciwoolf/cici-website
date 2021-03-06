import React from "react";
import { ArtItem } from "../art-item/ArtItem";
import styles from "./artList.module.css";
import { SquareWorks } from "../../data/data";


export const ArtList = () => {
  const artWorkImages =  SquareWorks.map((item) => {
       return (
       <ArtItem
        id={item.id}
        key={item.id}
        image={item.image}
        description={item.description}
        name={item.name} 
      /> 
     )     
  });

  return (    
     <>
     <div className={styles.wrapper}>
      {artWorkImages}                   
      </div>      
    </>     
  )
}

