import React from "react";
import Link from "next/link";
import WindowContainer from "./WindowContainer";
import styles from "./css/ServerLanding.module.css";

interface ServerLandingProps {
  username: string;
  servers: {
    [serverId: string]: {
      name: string;
      image: string;
      channels: object;
    };
  };
}

const ServerLanding: React.FC<ServerLandingProps> = ({ username, servers }) => {
  return (
    <div className={styles.container}>
      <WindowContainer
        title={`${username || "User"}'s servers`}
        style={{ minWidth: "50%" }}
        contentStyle={{ background: "#2f3136" }}
      >
        <div className={styles.serverList}>
          {Object.entries(servers).map(([serverId, server]) => (
            <Link
              href={`/channels/${serverId}`}
              key={serverId}
              className={styles.serverItem}
            >
              <img src={server.image} className={styles.serverIcon} />
              <div className={styles.serverInfo}>
                <h3>{server.name}</h3>
                <p>{Object.keys(server.channels).length} channels</p>
              </div>
            </Link>
          ))}
        </div>
      </WindowContainer>
    </div>
  );
};

export default ServerLanding;
