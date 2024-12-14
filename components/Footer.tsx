import React from "react";
import { default as MarqueeTag } from "react-fast-marquee";
import PageHitCounter from "./PageHitCounter";

const Footer: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%"
    }}>
        <PageHitCounter />
        <MarqueeTag style={{
            width: "100%",
            backgroundColor: "#000",
            color: "lime",
            padding: "10px 0",
            textAlign: "center"
        }}>
            {text}
        </MarqueeTag>
    </div>
  );
};

export default Footer;
