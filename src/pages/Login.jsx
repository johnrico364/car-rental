import { useForm } from "react-hook-form";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../App";

export const Login = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const { userData, setUserData } = useContext(AppContext);

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("username is required")
      .email("invalid email format"),
    password: yup
      .string()
      .required("password required")
      .min(8, "password is too short"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginAPI = async (loginData) => {
    try {
      const { data } = await axios.post(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/account/login",
        loginData
      );
      setUserData(data);
      return true;
    } catch (err) {
      setResponse(err.response.data.message);
    }
  };

  const loginAcc = async (data) => {
    const status = await loginAPI(data);
    status && navigate("/user");
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row height-100 justify-content-center align-items-center">
          <div className="col-lg-3 col-10 login-form-container">
            <div className="login-title mb-3">Log in</div>
            <form onSubmit={handleSubmit(loginAcc)}>
              <div className="row text-center">
                <div className="col-12">
                  <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    onChange={() => setResponse("")}
                    {...register("username")}
                  />
                  <div className="error-message">
                    {errors.username?.message}
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    onChange={() => setResponse("")}
                    {...register("password")}
                  />
                  <div className="error-message">
                    {errors.password?.message}
                    {response}
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <button type="submit" className="login-btn">
                    Log in
                  </button>
                </div>
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
