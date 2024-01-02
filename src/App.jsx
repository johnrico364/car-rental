import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UserNavbar } from "./pages/user/UserNavbar";
import { RentCar } from "./pages/user/RentCar";
import { ProfilePage } from "./pages/user/Profile";
import { Garage } from "./pages/user/Garage";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminNavbar } from "./pages/admin/AdminNavbar";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();

  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <AppContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Routes>
            <Route path="user" element={<UserNavbar />}>
              <Route path="rent" element={<RentCar />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="garage" element={<Garage />} />
            </Route>
            <Route path="admin" element={<AdminNavbar/>}>
              <Route path="list" />
              <Route path="add-car" />
              <Route path="dashboard" />
            </Route>

            <Route path="" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
