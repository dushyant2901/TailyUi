import styles from "./avatar.module.css";

import React from 'react'

export const Avatar = ({size,name,src}) => {
  return (
    <img src={src} alt={name} className={`${styles[`${size}`]} ${styles.img}`} />
  )
}
