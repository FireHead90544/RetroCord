import React from "react";
import WindowContainer from "@/components/WindowContainer";
import styles from "@/components/css/LoadingScreen.module.css";
import Marquee from "react-fast-marquee";

const LoadingScreen: React.FC<{ title: string }> = ({ title }) => {
  const tips = [
    "Discord was almost called Bonfire before we picked our name. It was meant to be nice and cozy.",
    "Discord was almost called Wyvern before we picked our name. Not too proud of that one.",
    "Our logo's name is Clyde.",
    'There are a bunch of hidden "Easter Eggs" in the app that happen when you click certain things... ',
    "Discord started as a game company making a mobile game called Fates Forever.",
    "Discord's official birthday is May 13, 2015.",
    "The top-most role for a user defines that user's color.",
    "We came up with the idea of Discord Nitro over morning breakfast potatoes.",
    "A red mic icon means that person has been muted by a server admin.",
    "Our mascot, Wumpus, was originally created as a character with no friends :(",
    "You can temporarily mute a server or channel by right-clicking it.",
    "In Discord's early days, light theme was the only theme. Scary times.",
    "In the ancient days, Discord started as a browser-only app.",
    "Group DMs can have up to ten members.",
    "Our HypeSquad program has three houses you can be sorted in to by taking the in-app quiz: Bravery, Balance, and Brilliance.",
    "The character on our 404 page is a robot hamster named Nelly.",
    "You can play our version of the Snake game on our 404 page by pressing a ~secret~ button.",
    "There's a very small—and we mean small—chance you can get a secret ringtone when calling someone. Good luck!",
    "Share what you're playing by using the Game Activity settings.",
    "Our old Partner mascot was an elf named Springle. He recently retired.",
    "You can join up to 100 servers.",
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className={styles.container}>
      <WindowContainer title="Loading...">
        <div className={styles.content}>
          <h2 className={styles.greeting}>{title}</h2>
          <div className={styles.loader}>
            <Marquee
              direction="right"
              style={{
                borderStyle: "inset",
                margin: "0 10px",
                boxShadow: "1px 1px 0 0.5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className={styles.loadingBar}></div>
              <div className={styles.loadingBar}></div>
              <div className={styles.loadingBar}></div>
              <div className={styles.loadingBar}></div>
            </Marquee>
          </div>
          <p className={styles.message}>{randomTip}</p>
        </div>
      </WindowContainer>
    </div>
  );
};

export default LoadingScreen;
