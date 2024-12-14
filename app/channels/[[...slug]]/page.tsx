import React from "react";

const ChannelsLanding = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const route = (await params).slug?.map((slug) => decodeURIComponent(slug)).join('/')
  //  route === undefined --> redirect to '/app'
  //  route === "@me" --> landing page showing servers, clicking on any server redirects to '/channels/serverid'
  //  route === "serverid" --> redirects to first channel of the server "/channels/serverid/channelid"
  //  route === "serverid/channelid" --> opens the channel to chat

  return <h1>Channels Route: {route}</h1>
}

export default ChannelsLanding
