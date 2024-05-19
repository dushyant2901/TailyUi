import styles from "./document.module.css";
import React from 'react'
import { CodeBlock } from "react-code-blocks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Avatar, Badge } from '../components'
import {badgeCode,avatarBadge} from "./codeBlocks/CodeBlock";

export const BadgeDoc = () => {

  const imageLink="https://storage.ko-fi.com/cdn/useruploads/display/8a8b9790-7303-4aee-881a-23ab131fa400_gear5daycopy.png";
  return (
    <div>
      <h1>Badge Component</h1>
      <p>The badge component takes in another component such as icon or avatar and returns a component to highlight notification or status</p>
      <h2>Notification Badges</h2>
      <p>Send an icon{"(svg)"} along with the quantity to see the badge on top of the icon</p>
      <Badge icon={<FontAwesomeIcon icon={faCartShopping} />} quantity={1} />
      <span className={styles.badge}>{" "}</span>
      <Badge  icon={<FontAwesomeIcon icon={faHeart} />} quantity={6} />
      <br />
      <h2>Avatar Badges</h2>
      <p>Send your avatar along with the status to get a visual depiction of user status</p>
      <section className={styles[`avatar-container`]}>
      <Badge avatar={<Avatar size="lg" name="joyboy" src={imageLink}/>} status="online" />
      <Badge avatar={<Avatar size="lg" name="joyboy" src={imageLink}/>} status="offline" />
      <Badge avatar={<Avatar size="lg" name="joyboy" src={imageLink}/>} status="busy" />
      <Badge avatar={<Avatar size="lg" name="joyboy" src={imageLink}/>} status="away" />
      </section>

      <h1>Usage</h1>
      <b>Icon Badge</b>
      <span><CodeBlock text={badgeCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Avatar Badge</b>
      <span><CodeBlock text={avatarBadge} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
    </div>
  )
}
