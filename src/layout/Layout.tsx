import { Outlet } from "react-router";
import SideBar from "../components/SideBar/SideBar";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles["laoyout"]}>
      <div>
        <SideBar />
      </div>
      <div className={styles["outlet"]}>
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
