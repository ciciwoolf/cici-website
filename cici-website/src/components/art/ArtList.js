import React from "react";
import { ArtItem } from "../art-item/ArtItem";
import { SelectedArtItem } from "../art-item/SelectedArtItem";
import styles from "./artList.module.css";
import { SquaredWorks } from "../../data/data";
import { OneWork } from "../../data/data";

export const ArtList = () => {
  const artWorkImages =  SquaredWorks.map((item) => {
    console.log(item)
       return (
       <ArtItem
        id={item.id}
        key={item.id}
        image={item.image}
        name={item.name} 
      /> 
     )     
  });

  const Work = OneWork.map((item) => {
    return (
      <SelectedArtItem
        id={item.id}
        key={item.id}
        image={item.image}
        name={item.name} 
      /> 
     )     
  });
 

  return (    
     <>
     <div className={styles.wrapperOne}>
      {artWorkImages}                   
      </div>   
      <div className={styles.wrapperTwo}>
      {Work}              
     </div> 
    </>     
  )
}

