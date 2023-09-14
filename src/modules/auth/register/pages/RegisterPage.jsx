import { Alert, Box, Snackbar } from "@mui/material";
import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";

function RegisterPage() {
  const [open, setOpen] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
      <Snackbar
        open={requestError || open}
        autoHideDuration={4000}
        onClose={() => setRequestError(false)}
      >
        <Alert severity={open ? "success" : "error"}>
          {open ? "Usuario creado" : errorMessage}
        </Alert>
      </Snackbar>
      <RegisterForm onChange={onChange} onSubmit={submitLogin} />
    </Box>
  );
}

export default RegisterPage;
