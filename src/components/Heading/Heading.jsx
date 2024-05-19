import styles from "./heading.module.css";

import React from 'react'

export const Heading = ({type,children}) => {
  return (
    <div className={styles[`${type}`]}>
      {children}
    </div>
  )
}
