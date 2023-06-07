import { Route, Routes } from "react-router-dom";
import HomePage from "./home/page.home";
import Header from "./components/header.component";

const UserRoutes = () => {
  return (
    <main className="bg-1 min-h-screen text-white">
      <Header />
      <div className="wrap-content-user">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </main>
  )
}
export default UserRoutes;