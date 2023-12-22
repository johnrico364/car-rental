import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UserNavbar } from "./pages/user/UserNavbar";
import {RentCar} from  "./pages/user/RentCar"
import {ProfilePage} from "./pages/user/Profile"
import {Garage} from "./pages/user/Garage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="user" element={<UserNavbar/>}>
            <Route path="rent" element={<RentCar/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="garage" element={<Garage/>}/>
          </Route>
          <Route path="admin">
            <Route path="list" />
            <Route path="add-car" />
            <Route path="dashboard" />
          </Route>

          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
