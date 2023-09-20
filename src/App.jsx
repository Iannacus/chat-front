import { ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./modules/auth/login/pages/LoginPage";
import theme from "./theme/newTheme";
import AuthLayout from "./modules/auth/AuthLayout";
import RegisterPage from "./modules/auth/register/pages/RegisterPage";
import ValidateEmail from "./modules/auth/validate-email/ValideteEmail";
import Chat from "./modules/chat/pages/Chat";
import Home from "./modules/home/pages/Home";
import Conversation from "./modules/chat/components/Conversation";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "email-validation",
        element: <ValidateEmail />,
      },
    ],
  },
  {
    path: "/chats",
    element: (
      <ProtectedRoute>
        <Chat />
      </ProtectedRoute>
    ),
    children: [{ path: "conversation/:id", element: <Conversation /> }],
  },
]);
