import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const navigate = useNavigate();
  const submitLogin = (formData) => {
    axios
      .post("http://localhost:8001/api/v1/users/login", formData)
      .then((res) => {
        // seria mandarlo a un estado global
        // localstorage
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/chats");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (formData) => {
    console.log(formData);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm onChange={onChange} onSubmit={submitLogin} />
    </Box>
  );
}

export default LoginPage;
