import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Router } from "react-router-dom";
import theme from "./theme/newTheme";
import ChatRouter from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ChatRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
