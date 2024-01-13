import "../styles/Navbar.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../../App";
import { useQuery } from "@tanstack/react-query";

export const UserNavbar = () => {
  const checkUser = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext);

  useEffect(() => {
    console.log(userData);
    if (!checkUser) {
      navigate("/");
    }
  }, []);

  const sessionUserAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/account/session/${checkUser}`
      );
      setUserData(data.items[0]);
    } catch (error) {}
  };

  const handleSignout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const data = useQuery({
    queryKey: ["session"],
    queryFn: sessionUserAPI,
    refetchInterval: 2000,
  });
  return (
    <div className="container-fluid main-background px-0">
      <div className="d-flex px-2">
        <div className="w-25 mt-3 logo-container">
          <img src="/images/Logo.png" height={50} alt="" />
        </div>
        <div className="w-75 mt-3 ">
          <ul className="nav justify-content-end pt-2 nav-container">
            <li className="nav-item">
              <Link className="nav-routers" to={"rent"}>
                Rent
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-routers" to={"profile"}>
                Profile/Booked
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-routers" to={"garage"}>
                Garage
              </Link>
            </li>
            <li class="nav-item">
              <span class="nav-routers" onClick={handleSignout}>
                Sign out
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed-bottom">
        <Outlet />
      </div>
    </div>
  );
};
