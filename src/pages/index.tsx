import React from "react";
import cn from "classnames";

import styles from "../styles/home.module.scss";

import { Logo } from "../components/Logo";
import { Socials } from "../components/Socials";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div>
      <section className={cn(styles.section, styles.sectionMain)}>
        <header>
          <Logo />
          <Socials />
          <Button onClick={() => {}}>Whitepaper</Button>
        </header>
      </section>
    </div>
  );
}
