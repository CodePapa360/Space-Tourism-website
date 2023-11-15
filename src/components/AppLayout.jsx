import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const breakpoints = {
  xs: "320px", // Extra small devices (phones)
  sm: "768px", // Small devices (tablets)
  md: "992px", // Medium devices (desktops)
  lg: "1200px", // Large devices (desktops)
  xl: "1440px", // Extra large devices (desktops)
};

function AppLayout() {
  return (
    <div className="relative ">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
