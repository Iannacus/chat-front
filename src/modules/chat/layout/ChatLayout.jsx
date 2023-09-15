import { Grid, Box, Stack } from "@mui/material";
import ChatCard from "../components/ChatCard";
import { Outlet } from "react-router-dom";

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
            background: (theme) => theme.palette.secondary.dark,
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
              background: (theme) => theme.palette.secondary.main,
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
            }}
          >
            +
          </Box>
        </Box>
        <Stack sx={{ overflowY: "scroll", maxHeight: "calc(100% - 70px)" }}>
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
          <ChatCard name="Sirila la loca" message="soquete!" hour="15:33" />
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
