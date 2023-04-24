import React from "react";

import styles from './card.module.css';

const Card=(props)=>{
    return(
        <div className={`${styles.Card} ${props.className}`} style={{borderColor:"red"}}>
            {props.children}
        </div>
    )
}
export default Card;