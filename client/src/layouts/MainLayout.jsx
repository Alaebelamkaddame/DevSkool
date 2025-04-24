import { Outlet } from "react-router-dom";
import NavBar from '../Component/NavBar.jsx';
import Footer from '../Component/Footer.jsx';

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
