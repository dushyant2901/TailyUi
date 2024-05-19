import styles from "./card.module.css";

import React, {useState} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const Card = ({title,children}) => {
  return (
    <div className={styles.card}>
      <h1 >{title}</h1>
      {children}
    </div>
  )
}

export const ToggleCard = ({title,children}) => {
  const [toggle,setToggle]=useState(true);
  return (
    <div className={styles.card} style={{display:toggle?"visible":"none"}}>
      <FontAwesomeIcon icon={faClose} className={styles.cross} onClick={()=>setToggle(false)}/>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export const TextCard = ({children}) => {
  return (
    <div className={styles[`text-card`]}>
      {children}
    </div>
  )
}

export const TextOverlayCard = ({source,name,title,titleColor,children}) =>
{
  return (
    <div className={styles[`overlay-card`]}>
      <section className={styles.section}>
        <img src={source} alt={name} className={styles.img}/>
        <h2 className={styles[`overlay-title`]} style={{color:titleColor?`${titleColor}`:"white"}}>{title}</h2>
      </section>
    
    {children}
  </div>
  )
}
export const HorizontalCard = ({source, name, children}) => {
  return(
      <div className={styles[`horizontal-card`]}>

        <img src={source} alt={name} className={styles[`horizontal-image`]}/>
        <p>{children}</p>
      </div>
  )
}

export const BadgeCard=({badgeText,title,children})=>
{
  return(
    <div className={styles.card}>
      <span className={styles.badge}>{badgeText}</span>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export const ShadowCard=({title,children})=>
{
  return (
    <div className={styles[`shadow-card`]}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}