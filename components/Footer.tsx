import React from "react";
import { default as MarqueeTag } from "react-fast-marquee";
import PageHitCounter from "./PageHitCounter";
import styles from '@/components/css/Footer.module.css';

const Footer: React.FC<{ text: string }> = ({ text }) => {
  return (
    <footer className={styles.footer}>
      <PageHitCounter />
      <MarqueeTag className={styles.marquee} style={{ background: "#292b2f" }}>
        {text}
      </MarqueeTag>
    </footer>
  );
};

export default Footer;
