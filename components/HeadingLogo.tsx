import React from "react";
import Link from "next/link";

const HeadingLogo: React.FC<{ onChannelsPage?: boolean }> = ({
  onChannelsPage,
}) => (
  <div
    style={{
      fontFamily: "'Comic Sans MS', cursive",
      fontSize: "4rem",
      color: "#800080",
      textShadow: "2px 2px 0 #FFFFFF, 4px 4px 0 #000000",
      textAlign: "center",
      marginBottom: onChannelsPage ? "auto" : "20px",
    }}
  >
    <Link href="/" style={{ color: "#800080", textDecoration: "none" }}>
      Discord
    </Link>
  </div>
);

export default HeadingLogo;
