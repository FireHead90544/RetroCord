"use client";
import React, { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { getLocalStorage } from "@/lib/localStorage";
import ServerLanding from "@/components/ServerLanding";
import ChannelView from "@/components/ChannelView";
import LoadingScreen from "@/components/LoadingScreen";

interface DiscordData {
  [serverId: string]: {
    name: string;
    channels: {
      [channelId: string]: {
        name: string;
        messages: Array<{
          [messageId: number]: {
            content: string;
            user: string;
            timestamp: number;
          };
        }>;
      };
    };
  };
}

const ChannelsLanding = ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const route = React.use(params).slug?.map((slug) => decodeURIComponent(slug)).join('/');

  const [username, setUsername] = useState("");
  const [discordData, setDiscordData] = useState<DiscordData>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loggedUser = localStorage.getItem("username");
    if (!loggedUser) {
      router.push("/");
      return;
    }
    setUsername(loggedUser);

    const localData = getLocalStorage("retrocordData");
    setDiscordData(localData);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (loading || !route || Object.keys(discordData).length === 0) return;

    if (route === undefined) {
      router.push("/app");
    } else if (route === "@me") {
      return;
    } else if (route.split("/").length === 1) {
      const serverId = route.split("/")[0];
      const server = discordData[serverId];

      if (!server) {
        redirect("/channels/@me");
      } else {
        const firstChannelId = Object.keys(server.channels)[0];
        if (!firstChannelId) {
          redirect("/channels/@me");
        } else {
          redirect(`/channels/${serverId}/${firstChannelId}`);
        }
      }
    }
  }, [route, router, discordData, loading]);

  if (loading) {
    return route?.split("/").length === 1 ? <ServerLanding username={username} servers={discordData} /> : <LoadingScreen title={`Welcome, ${username}!`} />;
  }

  if (route === "@me") {
    return <ServerLanding username={username} servers={discordData} />;
  }

  if (route?.split("/").length === 2) {
    const [serverId, channelId] = route.split("/");
    const server = discordData[serverId];
    const channel = server?.channels[channelId];

    if (!server || !channel) {
      redirect("/channels/@me");
    }

    return (
      <ChannelView
        serverId={serverId}
        channelId={channelId}
        server={server}
        channel={channel}
        allServers={discordData}
      />
    );
  }

  return null;
};

export default ChannelsLanding;
