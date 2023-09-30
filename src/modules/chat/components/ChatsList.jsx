import React from "react";
import ChatCard from "./ChatCard";

function ChatList({ chats }) {
  return (
    <>
      {chats.map((chat) => (
        <ChatCard
          name={chat.name}
          message={chat.message}
          hour={chat.hour}
          img={chat.img}
        />
      ))}
    </>
  );
}

export default ChatList;
