import { Route, Routes } from "react-router-dom";
import HomePage from "./home/page.home";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import ROUTE from '../../utils/routes.json'
import Products from "./product/page.product";
import BookingPage from "./booking/page.booking";
import InfoProduct from "./product/info.product";
const routes = ROUTE[0];
const UserRoutes = () => {
  return (
    <main className="bg-1 min-h-screen text-white">
      <Header />
      <div className="wrap-content-user mb-10 px-3 md:px-0">
        <Routes>
          <Route path={routes.routes_user.home} element={<HomePage />} />
          <Route path={routes.routes_user.product["/"]} element={<Products />} />
          <Route path={routes.routes_user.booking} element={<BookingPage />} />
          <Route path={routes.routes_user.product["/:id"]} element={<InfoProduct />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}
export default UserRoutes;