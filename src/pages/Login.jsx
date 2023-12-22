import "./styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row height-100 justify-content-center align-items-center">
          <div className="col-lg-3 col-10 login-form-container">
            <div className="login-title mb-3">Log in</div>
            <form className="row text-center" action="">
              <div className="col-12">
                <input
                  className="login-input"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="col-12 mt-3">
                <input
                  className="login-input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="col-12 mt-3">
                <button className="login-btn" onClick={() => navigate("/user")}>
                  Log in
                </button>
              </div>
            </form>
            <div className="d-flex mt-3 justify-content-center">
              <Link className="create-acc-link" to={"signup"}>
                Create Account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
