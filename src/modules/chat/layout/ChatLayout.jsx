import { Grid, Box, Stack } from "@mui/material";
import axios from "axios";
import react from "react";
import ChatCard from "../components/ChatCard";

function ChatLayout() {
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
            marginBottom: "30px",
            background: (theme) => theme.palette.grey[200],
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          {/* Boton para crear conversacion  */}
          <Box
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.primary.main,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
            onClick={() => {
              // tomar el id del usuario de la cuenta
              const user = JSON.parse(localStorage.getItem("user"));
              const { token, id } = user;
              console.log(`token: ${token}, id: ${id}`);
              axios.post(
                "http://localhost:8000/conversations",
                {
                  createdBy: id,
                  participants: [1],
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            }}
          >
            +
          </Box>
        </Box>
        <Stack sx={{ overflow: "scroll", height: "100%" }}>
          <ChatCard name="Ian Rosas" message="Que onda man!" hour="15:33" />
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
          <ChatCard name="Ian Rosas" message="Que onda man!" hour="15:33" />
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
          <ChatCard name="Ian Rosas" message="Que onda man!" hour="15:33" />
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
          <ChatCard name="Ian Rosas" message="Que onda man!" hour="15:33" />
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
          <ChatCard name="Ian Rosas" message="Que onda man!" hour="15:33" />
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
          <ChatCard name="Ian Rosas" message="Que onda man!" hour="15:33" />
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
        </Stack>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/007/167/520/original/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg')",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70px",
            borderLeft: (theme) => `1px solid ${theme.palette.grey[400]}`,
            background: (theme) => theme.palette.grey[200],
          }}
        />
        Chat
      </Grid>
    </Grid>
  );
}

export default ChatLayout;
