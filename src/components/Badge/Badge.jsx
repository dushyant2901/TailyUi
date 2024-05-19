import styles from "./badge.module.css";

import React from 'react'

export const Badge = ({icon,quantity,avatar,status}) => {


  return quantity ?(
    <div className={styles[`badge-container`]}>
      <span className={styles.badge}>{quantity}</span>
      <section className={styles[`icon-container`]}>
      {icon}
      </section>
    </div>
  )
  : (
    <div className={styles[`badge-container`]}>
    <span className={`${styles[`avatar-badge`]} ${styles[`${status}`]}`}> </span>
    <section className={styles[`avatar-container`]}>
    {avatar}
    </section>
  </div>
  )

  
}
