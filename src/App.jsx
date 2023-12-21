import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="user">
            <Route path="rent" />
            <Route path="profile" />
            <Route path="garage" />
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
