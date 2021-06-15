import React from "react";
import {ArtItem} from "../art-item/ArtItem";
import styles from "./art.module.css"
import { SquaredWorks } from "../../data/data"

export const Art = () => {

  return (
    
     <div className={styles.wrapper}>
       
    {SquaredWorks.map((item) => {
        console.log(item)
        return (
           <ArtItem
            id={item.id}
            image={item.image}
            name={item.name} 
        />
      
        );
      })} 
    </div>     
    
  )
}

{/* http://www.andreamanningart.com/accumulations */}
       {/* https://www.npmjs.com/package/react-simple-modal-slideshow */}