import styles from "./iconButton.module.css";

import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export const IconButton = ({type}) => {
  switch(type)
  {
    case "search":
      return (
        <div className={`${styles.search} ${styles.container}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <button className={`${styles.search} ${styles.button}`}>Search</button>
        </div>
      )

    case "edit":
      return (
        <div className={`${styles.edit} ${styles.container}`}>
          <FontAwesomeIcon icon={faPenToSquare} />
          <button className={`${styles.edit} ${styles.button}`}>Edit</button>
        </div>
      )
    
    case "delete":
      return (
        <div className={`${styles.delete} ${styles.container}`}>
          <FontAwesomeIcon icon={faTrash} />
          <button className={`${styles.delete} ${styles.button}`}>Delete</button>
        </div>
      )

    case "add":
      return (
        <div className={`${styles.add} ${styles.container}`}>
          <FontAwesomeIcon icon={faPlus} />
          <button className={`${styles.add} ${styles.button}`}>Add</button>
        </div>
      )
     
    default:
      return (
        <div className={`${styles.search} ${styles.container}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <button className={`${styles.search} ${styles.button}`}>Search</button>
        </div>
      )  
  }
}
