import styles from "./component.module.css";

import React from 'react'
import { useNavigate } from "react-router";

const componentArray=["alerts","avatars","badges","buttons","cards","heading","image","text"]


const ComponentCard=({name})=>
{
    const navigate=useNavigate();
    return (
        <li className={styles[`component-card`]} onClick={()=>navigate(`/components/${name}`)}>
            <h2 className={styles.heading} >{name}</h2>
        </li>
    )
}

export const Components = () => {
  return (
    <div>
        <h1>Components</h1>
        <p>Below are the list of components that can be used in your projects, with detailed documentaion</p>
        <ul className={styles[`list-container`]}>
            {componentArray.map(item=>(
                <ComponentCard name={item} />
            ))}
        </ul>
    </div>
  )
}
