import { Link, Outlet } from "react-router-dom";
import Navbar from "../final/components/StyledNavbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};
export default Home;
