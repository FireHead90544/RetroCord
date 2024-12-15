"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import WindowContainer from "./WindowContainer";
import styles from "@/components/css/LoginWindow.module.css";

const LoginWindow = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim()) {
      localStorage.setItem("username", username);
      router.push("/app");
    }
  };

  return (
    <WindowContainer title="Login">
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="username" className={styles.label}>
            Enter Your Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.input}
            placeholder="_rudra.xd_"
            pattern="^[a-zA-Z0-9._]+$"
          />
        </div>
        <button type="submit" className={styles.button}>
          Enter Chat
        </button>
      </form>
      <div className={styles.hint}>New to Discord? <span style={{ color: "#7386C8" }}>Pick a classy username!</span></div>
    </WindowContainer>
  );
};

export default LoginWindow;
