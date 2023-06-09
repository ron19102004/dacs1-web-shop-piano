import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./user/user.routes";
import ROUTE from '../utils/routes.json'
import LoginPage from "./user/auth/login.auth";
import RegisterPage from "./user/auth/register.auth";
const routes = ROUTE[0];
const ModuleRoutes = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
export default ModuleRoutes;
