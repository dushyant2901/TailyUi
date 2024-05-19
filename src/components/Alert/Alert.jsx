import styles from "./alert.module.css";

import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export const Alert = ({status, message}) => {

  const selectIcon=()=>
  {
    switch(status)
    {
      case "error":
        return faTriangleExclamation;

      case "success":
        return faCheck;
        
      case "warning":
        return faTriangleExclamation;
        
      case "notify":
        return faCircleExclamation;
        
      default:
        return faCircleExclamation;  
    }
  }

  return (
    <div className={`${styles[`alert-container`]} ${styles[`${status}`]} ${styles.show}`}>
      <FontAwesomeIcon icon={selectIcon()} />
      <p className={styles.message}>{message}</p>
    </div>
  )
}
