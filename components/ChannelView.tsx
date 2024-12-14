// components/ChannelView.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { MessageSquare, Send } from 'lucide-react';
import WindowContainer from './WindowContainer';
import styles from './css/ChannelView.module.css';
import { setLocalStorage, getLocalStorage } from "@/lib/localStorage";

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
  // Change this to store just the messages for the current channel
  const [messages, setMessages] = useState(channel.messages);
  const messageListRef = useRef<HTMLDivElement>(null);
  const username = localStorage.getItem('username') || 'User';

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Update messages when channel changes
  useEffect(() => {
    setMessages(channel.messages);
  }, [channel.messages, channelId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const messageId = Date.now();
    
    // Create a new message object
    const newMessageObj = {
      [messageId]: {
        content: newMessage,
        user: username,
        timestamp: messageId
      }
    };

    // Update local state first for immediate UI update
    setMessages(prevMessages => [...prevMessages, newMessageObj]);

    // Update localStorage
    const localData = getLocalStorage('retrocordData');
    const updatedData = {...localData};
    updatedData[serverId].channels[channelId].messages = [...messages, newMessageObj];
    setLocalStorage('retrocordData', updatedData);

    // Clear input
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
              <div className={styles.serverIcon}>
                {s.name[0].toUpperCase()}
              </div>
              <div className={styles.serverInfo}>
                <h3>{s.name}</h3>
                <p>{Object.keys(s.channels).length} channels</p>
              </div>
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
          <div ref={messageListRef} className={styles.messageList}>
            {messages.length === 0 ? (
              <div className={styles.noMessages}>No messages yet. Start the conversation!</div>
            ) : (
              messages.map((messageObj, index) => 
                Object.entries(messageObj).map(([msgId, msg]) => (
                  <div key={`${msgId}-${index}`} className={styles.message}>
                    <div className={styles.messageHeader}>
                      <span className={styles.username}>{msg.user}</span>
                      <span className={styles.timestamp}>
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className={styles.messageContent}>{msg.content}</div>
                  </div>
                ))
              )
            )}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder={`Message #${channel.name}`}
              className={styles.messageInput}
            />
            <button 
              onClick={sendMessage} 
              className={styles.sendButton}
              disabled={!newMessage.trim()}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </WindowContainer>
    </div>
  );
};

export default ChannelView;