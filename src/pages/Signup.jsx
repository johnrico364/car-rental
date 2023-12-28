import "./styles/Signup.css";
import { useNavigate, Link } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 pic-side d-lg-block d-md-none "></div>
        <div className="col-lg-6">
          <div className="row align-items-center justify-content-center height-100">
            <div className="col-11 signup-form-container">
              <div className="create-acc-title">Create Account</div>
              <div className="row">
                <div className="col-6 ps-0 pe-2">
                  <input
                    className="input-Container w-100 mt-3"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-6 pe-0 ps-2">
                  <input
                    className="input-Container w-100 mt-3"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-6 ps-0 pe-2">
                  <select className="input-Container w-100 mt-3">
                    <option selected disabled>
                      Select Sex
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-12 px-0">
                  <input
                    className="input-Container w-100 mt-3"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="col-12 px-0">
                  <input
                    className="input-Container w-100 mt-3"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12 px-0">
                  <button
                    className="sign-up-btn mt-3"
                    onClick={() => navigate("/")}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="text-end mt-3">
                  <Link to={"/"} className="have-account">I have an account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
