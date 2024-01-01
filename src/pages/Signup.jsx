import { useForm } from "react-hook-form";
import "./styles/Signup.css";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  const schema = yup.object().shape({
    fname: yup.string().required("Your first name is required"),
    lname: yup.string().required("Your last name is required"),
    gender: yup.string().required("Your gender is required"),
    username: yup
      .string()
      .email("Invalid email")
      .required("Username is required"),
    password: yup
      .string()
      .required("Need Password")
      .min(8, "Password is too short"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const newUserAPI = async (newPost) => {
    try {
      await axios.post(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/account/sign-up",
        newPost
      );
      return true;
    } catch (err) {
      setResponse(err.response.data.message);
    }
  };

  const createAccount = async (data) => {
    const status = await newUserAPI(data);
    status && navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 pic-side d-lg-block d-md-none "></div>
        <div className="col-lg-6">
          <div className="row align-items-center justify-content-center height-100">
            <div className="col-11 signup-form-container">
              <div className="create-acc-title">Create Account</div>
              <form onSubmit={handleSubmit(createAccount)}>
                <div className="row">
                  <div className="col-6 ps-0 pe-2">
                    <input
                      className="input-Container w-100 mt-3"
                      type="text"
                      placeholder="First Name"
                      {...register("fname")}
                    />
                    <span className="error-message">
                      {errors.fname?.message}
                    </span>
                  </div>
                  <div className="col-6 pe-0 ps-2">
                    <input
                      className="input-Container w-100 mt-3"
                      type="text"
                      placeholder="Last Name"
                      {...register("lname")}
                    />
                    <span className="error-message">
                      {errors.lname?.message}
                    </span>
                  </div>
                  <div className="col-6 ps-0 pe-2">
                    <select
                      className="input-Container w-100 mt-3"
                      {...register("gender")}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <span className="error-message">
                      {errors.gender?.message}
                    </span>
                  </div>
                  <div className="col-12 px-0">
                    <input
                      className="input-Container w-100 mt-3"
                      type="text"
                      placeholder="Username"
                      {...register("username")}
                    />
                    <span className="error-message">
                      {errors.username?.message}
                      {response}
                    </span>
                  </div>
                  <div className="col-12 px-0">
                    <input
                      className="input-Container w-100 mt-3"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <span className="error-message">
                      {errors.password?.message}
                    </span>
                  </div>
                  <div className="col-12 px-0">
                    <button
                      type="submit"
                      className="sign-up-btn mt-3"
                      // onClick={() => navigate("/")}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="text-end mt-3">
                    <Link to={"/"} className="have-account">
                      I have an account
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
