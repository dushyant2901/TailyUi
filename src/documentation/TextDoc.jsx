import styles from "./document.module.css";
import React from 'react'
import { CodeBlock } from "react-code-blocks";

import { Text } from "../components";
import {textCode} from "./codeBlocks/CodeBlock";

export const TextDoc = () => {
  return (
    <div>
      <h1>Text Component</h1>
      <p>Text is used to render text and paragraphs within an interface</p>
      
      <Text type="xxxlg">{"(3xl)"} The One Piece is Real</Text>
      <Text type="xxlg">{"(2xl)"} The One Piece is Real</Text>
      <Text type="xlg">{"(xl)"} The One Piece is Real</Text>
      <Text type="lg">{"(lg)"} The One Piece is Real</Text>
      <Text type="md">{"(md)"} The One Piece is Real</Text>
      <Text type="sm">{"(sm)"} The One Piece is Real</Text>
      <Text type="xsm">{"(xsm)"} The One Piece is Real</Text>
      <br />
      <h1>Usage</h1>
      <span><CodeBlock text={textCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
    </div>
  )
}
