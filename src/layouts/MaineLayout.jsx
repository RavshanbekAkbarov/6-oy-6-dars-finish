import { Outlet } from "react-router-dom";
// komponentlar
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
