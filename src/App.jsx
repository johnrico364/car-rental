import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Routes
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UserNavbar } from "./pages/user/UserNavbar";
import { RentCar } from "./pages/user/RentCar";
import { ProfilePage } from "./pages/user/Profile";
import { Garage } from "./pages/user/Garage";
import { AdminNavbar } from "./pages/admin/AdminNavbar";
import { RentList } from "./pages/admin/RentList";
import { AddCar } from "./pages/admin/AddCar";
import { Dashboard } from "./pages/admin/Dashboard";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();

  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Routes>
              <Route path="user" element={<UserNavbar />}>
                <Route path="rent" element={<RentCar />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="garage" element={<Garage />} />
              </Route>
              <Route path="admin" element={<AdminNavbar />}>
                <Route path="list" element={<RentList />} />
                <Route path="add-car" element={<AddCar />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>

              <Route path="" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
