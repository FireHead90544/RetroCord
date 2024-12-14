"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { MessageSquare, Users, Send } from 'lucide-react';
import WindowContainer from './WindowContainer';
import styles from './css/ChannelView.module.css';

interface Message {
  content: string;
  user: string;
  timestamp: number;
}

interface Channel {
  name: string;
  messages: Array<{ [key: number]: Message }>;
}

interface Server {
  name: string;
  channels: {
    [channelId: string]: Channel;
  };
}

interface ChannelViewProps {
  serverId: string;
  channelId: string;
  server: Server;
  channel: Channel;
  allServers: {
    [serverId: string]: Server;
  };
}

const ChannelView: React.FC<ChannelViewProps> = ({
  serverId,
  channelId,
  server,
  channel,
  allServers,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const username = localStorage.getItem('username');

  const sendMessage = () => {
    if (!newMessage.trim() || !username) return;

    const retrocordData = JSON.parse(localStorage.getItem('retrocordData') || '{}');
    const messageId = Date.now();
    
    const newMessageObj = {
      [messageId]: {
        content: newMessage,
        user: username,
        timestamp: messageId
      }
    };

    retrocordData[serverId].channels[channelId].messages.push(newMessageObj);
    localStorage.setItem('retrocordData', JSON.stringify(retrocordData));
    setNewMessage('');
  };

  return (
    <div className={styles.container}>
      {/* Server Selection Window */}
      <WindowContainer title="Servers">
        <div className={styles.serverList}>
          {Object.entries(allServers).map(([sId, s]) => (
            <Link
              href={`/channels/${sId}`}
              key={sId}
              className={`${styles.serverItem} ${sId === serverId ? styles.active : ''}`}
            >
              {s.name}
            </Link>
          ))}
        </div>
      </WindowContainer>

      {/* Channel List */}
      <WindowContainer title={`${server.name} - Channels`}>
        <div className={styles.channelList}>
          {Object.entries(server.channels).map(([cId, c]) => (
            <Link
              href={`/channels/${serverId}/${cId}`}
              key={cId}
              className={`${styles.channelItem} ${cId === channelId ? styles.active : ''}`}
            >
              <MessageSquare size={16} />
              {c.name}
            </Link>
          ))}
        </div>
      </WindowContainer>

      {/* Chat Window */}
      <WindowContainer title={`#${channel.name}`}>
        <div className={styles.chatContainer}>
          <div className={styles.messageList}>
            {channel.messages.flatMap(messageObj => 
              Object.entries(messageObj).map(([msgId, msg]) => (
                <div key={msgId} className={styles.message}>
                  <div className={styles.messageHeader}>
                    <span className={styles.username}>{msg.user}</span>
                    <span className={styles.timestamp}>
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className={styles.messageContent}>{msg.content}</div>
                </div>
              ))
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder={`Message #${channel.name}`}
              className={styles.messageInput}
            />
            <button onClick={sendMessage} className={styles.sendButton}>
              <Send size={16} />
            </button>
          </div>
        </div>
      </WindowContainer>
    </div>
  );
};

export default ChannelView;
