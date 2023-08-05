import React from 'react'
import { socialLinks } from '../data';

interface Props{
    parrentClass: string;
    itemClass: string;
}

const SocialLinks:React.FC<Props> = ({ parrentClass, itemClass }) => {
  return (
    <ul className={parrentClass}>
    {socialLinks.map(
      (links: { id: number; href: string; icon: string }) => {
        return (
          <li key={links.id}>
            <a
              href={links.href}
              target="_blank"
              rel="noreferrer"
              className={itemClass}
            >
              <i className={links.icon}></i>
            </a>
          </li>
        );
      }
    )}
  </ul>
  )
}

export default SocialLinks