import styles from "./document.module.css";
import React from 'react'
import { CodeBlock } from "react-code-blocks";

import { Button,IconButton,FloatingButton } from "../components";
import {buttonCode,iconButtonCode,floatingButtonCode} from "./codeBlocks/CodeBlock";

export const ButtonDoc = () => {
  return (
    <div>
      <h1>Button Components</h1>
      <p>Button Components provide various styles for different actions</p>
      <section className={styles[`button-container`]}>
        <Button type="primary" text="Solid button"/>
        <Button type="link" text="Solid button" link="https://google.com"/>
      </section>
      
      <br />
      <h1>IconButton Component</h1>
      <p>IconButton components combine icons with text for actions</p>
      <section className={styles[`button-container`]}>
      <IconButton type="search" />
      <IconButton type="delete" />
      <IconButton type="add" />
      <IconButton type="edit" />
      </section>
      <br />

      <h1>Floating Action Button Component</h1>
      <p>Floating Action Button Component provide quick actions for user interaction</p>
      <section className={styles[`button-container`]}>
      <FloatingButton type="logout"/>
      <FloatingButton />
      </section>

      <h1>Usage</h1>
      <b>Primary Button & Link</b>
      <span><CodeBlock text={buttonCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Icon Buttons</b>
      <span><CodeBlock text={iconButtonCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Floating Action Buttons</b>
      <span><CodeBlock text={floatingButtonCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
    </div>
  )
}
