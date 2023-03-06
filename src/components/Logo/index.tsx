import Link from "next/link";
import React from "react";

import styles from "./index.module.scss";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <h1 className={styles.logo}>
      <Link className={styles.logoLink} href="/">
        Dusktopia
      </Link>
    </h1>
  );
};
