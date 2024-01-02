import "../styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const AdminNavbar = () =>{
    return (
        <div className="container-fluid main-background px-0">
          <div className="d-flex px-2">
            <div className="w-25 mt-3 logo-container">
              <img src="/images/Logo.png" height={50} alt="" />
            </div>
            <div className="w-75 mt-3 ">
              <ul className="nav justify-content-end pt-2 nav-container">
                <li className="nav-item">
                  <Link className="nav-routers" to={"list"}>
                    Rent List
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-routers" to={"add-car"}>
                    Add Car
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-routers" to={"dashboard"}>
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-routers" to={"/"}>Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="fixed-bottom">
            <Outlet />
          </div>
        </div>
      );
}