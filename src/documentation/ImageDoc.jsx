import styles from "./document.module.css";
import React from 'react'
import { CodeBlock } from "react-code-blocks";

import { Image } from "../components";
import {imageCode,roundedImageCode} from "./codeBlocks/CodeBlock";

export const ImageDoc = () => {
  return (
    <div>
      <h1>Image Component</h1>
      <p>The Image component is used to display responsive images</p>
      <section>
      <Image type="responsive" height={400} source={"https://i.pinimg.com/1200x/94/36/82/943682f79b88d546c410485009e14e10.jpg"} />
      </section>
      <h1>Round Image Component</h1>
      <p>The Image component is used to display images in round shape</p>
      <section>
      <Image type="rounded" height={400} source={"https://i.pinimg.com/1200x/94/36/82/943682f79b88d546c410485009e14e10.jpg"} />
      </section>
      <h1>Usage</h1>
      <b>Responsive Image</b>
      <span><CodeBlock text={imageCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Rounded Image</b>
      <span><CodeBlock text={roundedImageCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
    </div>
  )
}
