import styles from "./text.module.css";

import React from 'react'

export const Text = ({type,children}) => {
  return (
    <p className={styles[`${type}`]}>{children}</p>
  )
}
