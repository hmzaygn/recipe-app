import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import GlobalStyled from "../components/styles/Global.styled";
import Details from "../pages/Details/Details";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <>
      <GlobalStyled />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
