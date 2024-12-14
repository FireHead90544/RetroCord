const DEFAULT_DATA = {
  123456789012345678: {
    name: "Codedex",
    channels: {
      1234567890123456781: {
        name: "general",
        messages: [
          {
            0: {
              content: "Hi there",
              user: "_rudra.xd_",
              timestamp: 1627891234,
            },
          },
          {
            1: {
              content: "Welcome to the server!",
              user: "john_doe",
              timestamp: 1627891250,
            },
          },
        ],
      },
      9876543210098765431: { name: "memes", messages: [] },
      2345678901234567890: {
        name: "random",
        messages: [
          {
            0: {
              content: "Random chat",
              user: "alice123",
              timestamp: 1627891300,
            },
          },
        ],
      },
      3456789012345678901: {
        name: "tech-talk",
        messages: [
          {
            0: {
              content: "Discuss tech here",
              user: "tech_guru",
              timestamp: 1627891350,
            },
          },
        ],
      },
      4567890123456789012: { name: "music", messages: [] },
    },
  },
  234567890123456789: {
    name: "DevelopersHub",
    channels: {
      2345678901234567891: { name: "announcements", messages: [] },
      3456789012345678902: {
        name: "coding-help",
        messages: [
          {
            0: {
              content: "Need help with JavaScript",
              user: "coder123",
              timestamp: 1627891400,
            },
          },
          {
            1: {
              content: "Sure, what issue are you facing?",
              user: "helper",
              timestamp: 1627891450,
            },
          },
        ],
      },
      4567890123456789013: { name: "project-share", messages: [] },
      5678901234567890124: { name: "off-topic", messages: [] },
    },
  },
  345678901234567890: {
    name: "GamingZone",
    channels: {
      3456789012345678901: {
        name: "general",
        messages: [
          {
            0: {
              content: "Ready to play?",
              user: "gamer1",
              timestamp: 1627891500,
            },
          },
        ],
      },
      4567890123456789014: { name: "game-updates", messages: [] },
      5678901234567890125: { name: "voice-chat", messages: [] },
      6789012345678901236: { name: "tournaments", messages: [] },
    },
  },
  456789012345678901: {
    name: "ArtCommunity",
    channels: {
      4567890123456789015: { name: "general", messages: [] },
      5678901234567890126: {
        name: "art-share",
        messages: [
          {
            0: {
              content: "Check out my new painting",
              user: "artist123",
              timestamp: 1627891550,
            },
          },
        ],
      },
      6789012345678901237: { name: "critiques", messages: [] },
    },
  },
  567890123456789012: {
    name: "BookClub",
    channels: {
      5678901234567890127: {
        name: "general",
        messages: [
          {
            0: {
              content: "What book are you reading?",
              user: "reader1",
              timestamp: 1627891600,
            },
          },
        ],
      },
      6789012345678901238: { name: "recommendations", messages: [] },
      7890123456789012349: { name: "discussions", messages: [] },
      8901234567890123450: {
        name: "book-of-the-month",
        messages: [
          {
            0: {
              content: "Discussing 'The Great Gatsby'",
              user: "moderator",
              timestamp: 1627891650,
            },
          },
        ],
      },
    },
  },
};

export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined") {
    return DEFAULT_DATA;
  }

  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(DEFAULT_DATA));
    return DEFAULT_DATA;
  }

  return JSON.parse(data);
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};