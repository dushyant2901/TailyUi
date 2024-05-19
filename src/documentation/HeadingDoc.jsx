import styles from "./document.module.css";
import React from 'react'
import { CodeBlock } from "react-code-blocks";

import { Heading } from "../components";
import {headingCode} from "./codeBlocks/CodeBlock";

export const HeadingDoc = () => {
  return (
    <div>
      <h1>Heading Component</h1>
      <p>Heading is used to render semantic HTML heading elements</p>
      <Heading type="xxl">{"(2xl)"} The One Piece is Real</Heading>
      <Heading type="xl">{"(xl)"} The One Piece is Real</Heading>
      <Heading type="lg">{"(lg)"} The One Piece is Real</Heading>
      <Heading type="md">{"(md)"} The One Piece is Real</Heading>
      <Heading type="sm">{"(sm)"} The One Piece is Real</Heading>
      <Heading type="xsm">{"(xsm)"} The One Piece is Real</Heading>
      <Heading type="xxsm">{"(2sm)"} The One Piece is Real</Heading>
      <br />
      <h1>Usage</h1>
      <span><CodeBlock text={headingCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
    </div>
  )
}
