import React from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface SocialsProps {}

const socialNetworks = [
  {
    id: 1,
    title: 'Discord',
    className: 'Discord',
    link: 'https://discord.com/',
  },
  {
    id: 2,
    title: 'Twitter',
    className: 'Twitter',
    link: 'https://twitter.com/',
  },
  {
    id: 3,
    title: 'Medium',
    className: 'Medium',
    link: 'https://medium.com/',
  },
];

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <ul className={styles.socialList}>
      {socialNetworks.map((social) => (
        <li key={social.id} className={styles.socialListItem}>
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className={cn(
              styles.socialListLink,
              styles[`socialList${social.className}`]
            )}>
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
