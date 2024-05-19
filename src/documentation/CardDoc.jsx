import styles from "./document.module.css";
import React from 'react'
import { CodeBlock } from "react-code-blocks";

import { Card,ToggleCard,TextCard,TextOverlayCard,HorizontalCard,BadgeCard,ShadowCard } from "../components";
import {cardCode,cardBadgeCode,toggleCardCode,textOverlayCardCode,textCard,horizontalCardCode,shadowCardCode} from "./codeBlocks/CodeBlock";

export const CardDoc = () => {
  return (
    <div>
      <h1>Cards</h1>
      <h2>Basic Card Component</h2>
      <p>Pass a title and desired text to get yourself a basic card with a heading and text</p>
      <Card title="Heading">This is a sample Card</Card>
      <br/>

      <h2>Cards with badges</h2>
      <p>Pass a badge text along with title and content to get a card with the badge at
        top right corner of the card
      </p>
      <BadgeCard badgeText={"New"} title="Heading">This is a card with a badge</BadgeCard>
      <br/>

      <h2>Cards with dismiss</h2>
      <p> Cards with a cross component to dismiss the card when clicked by user
      </p>
      <section className={styles[`cards-section`]}>
        <ToggleCard title="Heading 1">This is a dismiss card</ToggleCard>
        <ToggleCard title="Heading 2">This is another dismiss card</ToggleCard>
      </section>
      <br/>

      <h2>Cards with text overlay</h2>
      <p> Pass image link with name of image along with title and text to render a card with image overlay.
        You can pass the color of the title as well
      </p>
      <TextOverlayCard source={"https://staticg.sportskeeda.com/editor/2023/08/39f7f-16920954137159-1920.jpg"} name="Joyboy luffy" title={"JoyBoy"}>
        After 800 years, we hear the drums of liberation, as the warrior of liberation is here. JoyBoy is here!
      </TextOverlayCard>
      <br/>

      <h2>Text Only Cards</h2>
      <p>A basic card with only text and no title.
      </p>
      <TextCard>This is a text only card with text and no title</TextCard>
      <br/>

      <h2>Horizontal Cards</h2>
      <p> Pass image link with name of image along with the text to get a horizontal card where the image is on the left side and 
        the text is on the right side.
      </p>
      <HorizontalCard source={"https://staticg.sportskeeda.com/editor/2023/08/39f7f-16920954137159-1920.jpg"} name="Joyboy luffy">
        This is the journey of a boy who awakened the power to liberate the oppressed from their oppressors.
        Witness this journey and strive to awaken the JoyBoy within us.

      </HorizontalCard>
      <br/>

      <h2>Cards with Shadow</h2>
      <p> A basic card with title and text where, instead of a solid border, we give a shadow effect for visual appeal.
      </p>
      <ShadowCard title="Heading 3">This is a shadow card</ShadowCard>
      <br/>

      <h1>Usage</h1>
      <b>Basic Card</b>
      <span><CodeBlock text={cardCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Card with badge</b>
      <span><CodeBlock text={cardBadgeCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Toggle Cards</b>
      <span><CodeBlock text={toggleCardCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Text Overlay Cards</b>
      <span><CodeBlock text={textOverlayCardCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Text Only Cards</b>
      <span><CodeBlock text={textCard} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Horizontal Cards</b>
      <span><CodeBlock text={horizontalCardCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
      <b>Shadow Cards</b>
      <span><CodeBlock text={shadowCardCode} language="jsx" showLineNumbers={false} className={styles[`code-block`]}/></span>
      <br/>
    </div>
  )
}
