import styles from "./button.module.css";

import React from 'react'

export const Button = ({type,text,link}) => {
  return type==="link"
  ?(
    <a href={link} target="_blank" className={styles[`link-button`]}>{text}</a>
  )
  :(
    <button className={styles[`primary-button`]}>{text}</button>
  )
}
