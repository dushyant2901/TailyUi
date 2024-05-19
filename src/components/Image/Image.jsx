import styles from "./image.module.css";

import React from 'react'

export const Image = ({type,source,name,height}) => {
  return (
    <img src={source} alt={name} className={styles[`${type}`]} height={height?height:400}/>
  )
}
