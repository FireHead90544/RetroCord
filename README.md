# RetroCord 🌐

[![Retro Style](https://img.shields.io/badge/Style-90s/Retro-red.svg)](https://github.com/FireHead90544/RetroCord)
[![Windows 98](https://img.shields.io/badge/Theme-Windows%2098-blue.svg)](https://github.com/FireHead90544/RetroCord)
[![Discord Clone](https://img.shields.io/badge/Clone-Discord-purple.svg)](https://github.com/FireHead90544/RetroCord)

> Discord, redesigned in Windows 98 retro-style built for the Codedex Mini Holiday Hackathon 2024.

[**Live Demo**](https://yayretrocord.vercel.app/)

## 🎮 Overview

RetroCord reimagines Discord with a classic Windows 98 aesthetic. Experience the modern communication platform through the lens of 90s design, complete with classic UI elements, retro color schemes, and nostalgic interactions.

## ✨ Features

- **Authentic Windows 98 UI**: Experience 90s retro vibe with this one
- **Garbage Authentication**: Welp, what would you ask more from a static website? Enter username, get in.
- **Servers & Channels**: Organize conversations in different servers & channels just like our beloved discord.
- **Real-Time Chat**: Send and receive messages in a retro-styled interface. Real time? Or is it?
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Local Storage**: Persistent data storage using browser's local storage. Eh? Database is for noobs.
- **Retro Animations**: Classic Windows 98-style effects, transitions and animations.
- **Hit Counter**: Classic webpage hit counter for that authentic 90s feel. It scams though.

## 🌌 Routes

Uhm yeah, it does replicate the most basic api routes discord offers.

| Route                            | Use                                                                        |
|----------------------------------|----------------------------------------------------------------------------|
| `/`                              | Landing/Login, redirects to `/app`                                         |
| `/app`                           | Loading screen, redirects to `/channels/@me`                               |
| `/channels`                      | Garbage catch heh, redirects to `/app`                                     |
| `/channels/@me`                  | Shows server list                                                          |
| `/channels/:serverID`            | Redirects to first channel of the server, `/channels/:serverID/:channelID` |
| `/channels/:serverID/:channelID` | Shows the chat window to chat in a particular channel                      |

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - For type-safe code
- **CSS Modules** - For scoped styling
- **Local Storage API** - For data persistence (No database/backend hehe)
- **Lucide Icons** - For minimal, retro-styled icons
- **React Fast Marquee** - For retro text animations (Who doesn't know marquee?)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/FireHead90544/RetroCord.git
   ```

2. **Install dependencies**
   ```bash
   cd RetroCord
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/FireHead90544/RetroCord/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgments

- Inspired by Discord's interface
- Windows 98 design system
- [Codedex](https://codedex.io) for hosting the hackathon

---

<p align="center">Made with 💜 by <a href="https://github.com/FireHead90544">FireHead90544</a></p>
