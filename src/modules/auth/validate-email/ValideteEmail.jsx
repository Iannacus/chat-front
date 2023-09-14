import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function ValidateEmail() {
  const [valid, setValid] = useState("");
  const [completed, setCompleted] = useState(false);
  const [time, setTime] = useState(5);
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (time <= 0) {
      navigate("/auth/login");
    }
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (token) {
      axios
        .post("http://localhost:8000/confirm-email", { token })
        .then((resp) => {
          setCompleted(true);
          if (resp.status === 204) {
            setValid(resp.status);
          }
        });
    }
  }, [token]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        height: "100vh",
      }}
    >
      <Typography variant="h3">Validando tu correo</Typography>
      {completed && valid === 204 && (
        <>
          <Typography variant="h4" color="secondary">
            El correo ha sido verificado
          </Typography>
          <Typography variant="body2" color="secondary">
            Se esta redirigiendo a login {time} si no eres redirigido has click
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              component="span"
              color="primary"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              {" "}
              aqui
            </Typography>
          </Typography>
        </>
      )}
      {completed && valid !== 204 && (
        <Typography variant="h4" color="secondary">
          Ocurrio un error
        </Typography>
      )}
    </Box>
  );
}

export default ValidateEmail;
