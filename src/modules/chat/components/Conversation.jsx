import React from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";

function Conversation() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100% - 70px)",
        maxHeight: "calc(100% - 70px)",
        backgroundImage:
          'url("https://img.freepik.com/premium-vector/abstract-colorful-lines-pattern-art-background_6735-2046.jpg")',
        backgroundSize: "cover,",
        overflowY: "scroll",
      }}
      justifyContent="space-between"
    >
      <Stack
        sx={{
          width: "calc(100% - 80px)",
          height: "95%",
          maxHeight: "100%",
          padding: "40px",
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7px)",
        }}
        gap="12px"
        justifyContent="flex-end"
      >
        <Message hour="5:05 am" content="Hola miundo" name="Siria 🦉" />
        <Message hour="5:07 am" content="que onda tu 😄" alignment />
        <Message
          hour="5:05 am"
          content="Hola miundo lsdkfj klsadhf  klsadhjf lksdhf kalshjdf  ksadhjf sadsdfds sdfasdf sadfasdf sadfasfas sadfasdf "
          name="Siria 🦉"
        />
        <Message hour="5:05 am" content="Correle" name="Siria 🦉" />
        <Message hour="5:05 am" content="Ya estamos aqui" name="Siria 🦉" />
        <Message hour="5:05 am" content="afuera" name="Siria 🦉" />
        <Message hour="5:07 am" content="voy" alignment />
        <Message hour="5:08 am" content="Ya me voy" name="Siria 🦉" />
        <Message hour="5:09 am" content="esperame" alignment />
        <Message hour="5:09 am" content="no te vayas" alignment />
        <Message hour="5:09 am" content="ya no me tardo" alignment />
        <Message hour="5:10 am" content="5 min, ya no mas" name="Siria 🦉" />
        <Message hour="5:10 am" content="porque no te aviso" name="Siria 🦉" />
        <Message hour="5:10 am" content="y me voy" name="Siria 🦉" />
        <Message hour="5:11 am" content="ok ☹️" alignment />
        <Message hour="5:20 am" content="me fui" name="Siria 🦉" />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        gap="20px"
        sx={{
          height: "5%",
          width: "calc(100%)",
          padding: "20px",
          background: (theme) => theme.palette.grey[200],
          position: "sticky",
          bottom: 0,
        }}
      >
        <TextField
          fullWidth
          placeholder="Escribe un mensaje"
          variant="outlined"
          color="secondary"
        />
        <IconButton>
          <SendIcon fontSize="large" style={{ color: "#8333FF" }} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Conversation;
