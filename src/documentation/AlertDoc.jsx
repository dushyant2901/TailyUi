import styles from "./document.module.css";

import React, { useEffect, useState } from 'react'
import { CodeBlock } from "react-code-blocks";


import { Alert } from '../components'
import { alertCode } from "./codeBlocks/CodeBlock";

export const AlertDoc = () => {
  const [showAlerts,setShowAlert]=useState({error:false,success:false,warning:false,notification:false})

  const clickHandler =(alert)=>
  {
    setShowAlert(prev=>({...prev,[alert]:true}))
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowAlert({error:false,success:false,warning:false,notification:false})
    },3000)
    return ()=>{
      clearTimeout(timer);
    }
  },[showAlerts])
  return (
    <div>
      <h1>Alerts</h1>
      <p>The alert components are used to display various types of messages with different status. Click on the buttons below to 
        see different alerts
      </p>
      <ol>
        <li className={styles[`alert-buttons-list`]}>
          <button className={styles[`error-alert-button`]} onClick={()=>clickHandler("error")}>Error Alert</button>
          {showAlerts.error && <Alert status="error" message="Invalid Credentials" />}
      </li>

        <li className={styles[`alert-buttons-list`]}>
          <button className={styles[`success-alert-button`]} onClick={()=>clickHandler("success")}>Success Alert</button>
          {showAlerts.success && <Alert status="success" message="Logged in Successfully" />}
      </li>

        <li className={styles[`alert-buttons-list`]}>
          <button className={styles[`warning-alert-button`]} onClick={()=>clickHandler("warning")}>Warning Alert</button>
          {showAlerts.warning && <Alert status="warning" message="Passwords do not match" />}
      </li>

        <li className={styles[`alert-buttons-list`]}>
          <button className={styles[`notification-alert-button`]} onClick={()=>clickHandler("notification")}>Notification Alert</button>
          {showAlerts.notification && <Alert status="notify" message="You have a new follower" />}
      </li>
      </ol>
      <h1>Usage</h1>
      <p><CodeBlock text={alertCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></p>
    </div>
  )
}
