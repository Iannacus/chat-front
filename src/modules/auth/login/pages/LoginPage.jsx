import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const navigate = useNavigate();
  const submitLogin = (formData) => {
    console.log(formData);
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
