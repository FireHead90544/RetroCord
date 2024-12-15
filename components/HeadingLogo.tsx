import React from "react";
import Link from "next/link";

const HeadingLogo: React.FC<{ onChannelsPage?: boolean }> = ({
  onChannelsPage,
}) => (
  <div
    style={{
      fontFamily: "'Comic Sans MS', cursive",
      fontSize: "4rem",
      color: "#6c81ca",
      textShadow: "2px 2px 0 #36393e, 4px 4px 0 #000000",
      textAlign: "center",
      marginBottom: onChannelsPage ? "auto" : "20px",
    }}
  >
    <Link href="/" style={{ color: "#6c81ca", textDecoration: "none" }}>
      Discord
    </Link>
  </div>
);

export default HeadingLogo;
