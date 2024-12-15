import React from "react";
import Link from "next/link";
import styles from "@/components/css/HeadingLogo.module.css"

const HeadingLogo: React.FC<{ onChannelsPage?: boolean }> = ({
  onChannelsPage,
}) => (
  <Link href="/" style={{ textDecoration: "none" }}>
    <img
      src="/discord.png"
      alt="Discord Logo"
      className={styles.imgStyle}
      style={{ marginBottom: onChannelsPage ? "auto" : "20px" }}
    />
  </Link>
);

export default HeadingLogo;
