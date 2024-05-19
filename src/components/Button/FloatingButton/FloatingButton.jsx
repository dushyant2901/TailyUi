import styles from "./floatingButton.module.css"

import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons"

export const FloatingButton = ({type}) => {
  return type==="logout"
  ?(
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faCircleLeft} className={styles.fontIcon}/>
    </span>
  )
  :(
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faPlus} className={styles.fontIcon}/>
    </span>
  )
}
