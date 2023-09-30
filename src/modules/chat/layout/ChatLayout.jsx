import { Grid, Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import UserMenu from "../components/UserMenu";
import UsersList from "../components/UsersList";
import ChatList from "../components/ChatsList";
import { useEffect, useState } from "react";
import axios from "axios";

const chats = [
  {
    name: "Adriel Maldonado",
    message: "No me digas!",
    hour: "15:33",
    image: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg",
  },
];

function ChatLayout() {
  const [showMessages, setShowMessages] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);

  const { id: userId, token } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/v1/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data.filter((user) => user.id !== userId)));

    axios
      .get(`http://localhost:8001/api/v1/conversations/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setConversations(res.data));
  }, []);

  console.log(conversations);

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
    const body = { userId, participantId };
    axios
      .post("http://localhost:8001/api/v1/conversations", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        axios
          .get(`http://localhost:8001/api/v1/conversations/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => setConversations(res.data));
        setShowUsers(false);
        setShowMessages(true);
      });
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
          {showMessages && <ChatList chats={conversations} />}
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
