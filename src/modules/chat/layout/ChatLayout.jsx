import { Grid, Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import UserMenu from "../components/UserMenu";
import UsersList from "../components/UsersList";
import ChatList from "../components/ChatsList";
import { useState } from "react";

const chats = [
  {
    name: "Adriel Maldonado",
    message: "No me digas!",
    hour: "15:33",
    image: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg",
  },
];

const users = [
  {
    id: 1,
    firstname: "Ian",
    lastname: "Rosas",
    description: "Vivinedo al día",
    avatar:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
  },
  {
    id: 2,
    firstname: "Adriel",
    lastname: "Maldonado",
    description: "Solo llamadas",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRzkEEVtiPqqpsIeWxJzt-6pieZh0gl5wWncL3yQA1XDIZKWtEcYwAvp5qwbMnDWOAQI&usqp=CAU",
  },
];

function ChatLayout() {
  const [showMessages, setShowMessages] = useState(true);
  const [showUsers, setShowUsers] = useState(false);

  const handleCancelCreateConversation = () => {
    setShowMessages(true);
    setShowUsers(false);
  };

  const handleOnCreateConversation = () => {
    setShowMessages(false);
    setShowUsers(true);
    console.log("craedo conversacion");
  };

  const handleOnCreateGroup = () => {
    console.log("creando grupo");
  };

  const onSelectUser = (participantId) => {
    // hacer petición al ep para crear conversacion con
    // userId y participantId
    const { id: userId, token } = JSON.parse(localStorage.getItem("user"));
    const body = { userId, participantId };

    console.log(body);
  };

  return (
    <Grid
      container
      sx={{
        background: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid item xs={3} sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "70px",
            background: (theme) => theme.palette.secondary.dark,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          <UserMenu
            onCreateConversation={handleOnCreateConversation}
            onCreateGroup={handleOnCreateGroup}
          />
        </Box>
        <Stack
          sx={{
            overflowY: "scroll",
            maxHeight: "calc(100% - 70px)",
            height: "100%",
          }}
        >
          {showMessages && <ChatList chats={chats} />}
          {showUsers && (
            <UsersList
              users={users}
              onCancel={handleCancelCreateConversation}
              onSelectUser={onSelectUser}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={9} sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "70px",
            borderLeft: (theme) => `1px solid ${theme.palette.grey[400]}`,
            background: (theme) => theme.palette.secondary.dark,
          }}
        />
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default ChatLayout;
