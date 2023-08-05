import React from "react";
import { pageLinks } from "../data";

interface Props {
    parrentClass: string;
    itemClass: string
}


const PageLinks:React.FC<Props> = ({parrentClass, itemClass }) => {
  return (
    <ul className={parrentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
