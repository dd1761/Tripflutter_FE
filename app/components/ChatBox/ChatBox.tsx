"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatBox.module.css";
import Link from "next/link";

interface Message {
  user: string;
  text: string;
}

interface Chat {
  id: number;
  messages: Message[];
}

const ChatBox: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      messages: [
        { user: "TripFlutter", text: "당신의 여행에 대해 알려주세요." },
        { user: "You", text: "[24.06.28~07.02] 오사카 여행 계획 추천해줘." },
        { user: "TripFlutter", text: "[24.06.28~07.02] 오사카 여행 계획 추천해드릴께요." },
        { user: "TripFlutter", text: "[24.06.28] Day1 ..." },
        { user: "TripFlutter", text: "[24.06.29] Day2 ..." },
        { user: "TripFlutter", text: "[24.06.30] Day3 ..." },
        { user: "TripFlutter", text: "[24.07.01] Day4 ..." },
        { user: "TripFlutter", text: "[24.07.02] Day5 ..." },
      ],
    },
  ]);
  const [currentChatId, setCurrentChatId] = useState<number>(1);
  const [newMessage, setNewMessage] = useState<string>('');
  const messageEndRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find((chat) => chat.id === currentChatId);

  const sendMessage = () => {
    if (newMessage.trim() && currentChat) {
      const updatedChats = chats.map((chat) =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, { user: 'You', text: newMessage }] }
          : chat
      );
      setChats(updatedChats);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const createNewChat = () => {
    const newChatId = chats.length + 1;
    setChats([
      ...chats,
      { id: newChatId, messages: [{ user: "TripFlutter", text: "당신의 여행에 대해 알려주세요." }] },
    ]);
    setCurrentChatId(newChatId);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat?.messages]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button onClick={createNewChat} className={styles.newChatButton}>
          채팅창 새로 만들기
        </button>
        <div className={styles.chatList}>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`${styles.chatItem} ${chat.id === currentChatId ? styles.activeChat : ''}`}
              onClick={() => setCurrentChatId(chat.id)}
            >
              [24.06.28~07.02] 오사카 여행 {chat.id}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chatBox}>
        <div className={styles.messages}>
          {currentChat?.messages.map((message, index) => (
            <div
              key={index}
              className={
                message.user === "You" ? styles.userMessage : styles.tripFlutterMessage
              }
            >
              <img
                src={message.user === "You" ? "/images/your-icon.png" : "/images/tripflutter-icon.png"}
                alt={`${message.user} icon`}
                className={styles.messageIcon}
              />
              <div className={styles.messageText}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messageEndRef} />
          <div>
            <Link href={"/trip-detail"}>
              <button className={styles.buttonStyle}>일정 상세히 보기</button>
            </Link>
            <button className={styles.buttonStyle}>일정 저장하기</button>
            <button className={styles.buttonStyle}>일정 다시 생성하기</button>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.inputField}
            placeholder="메시지를 입력하세요..."
          />
          <button className={styles.buttonStyle} onClick={sendMessage}>
            보내기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
