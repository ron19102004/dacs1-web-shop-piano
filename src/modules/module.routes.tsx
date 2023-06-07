import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./user/user.routes";

const ModuleRoutes = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};
export default ModuleRoutes;
