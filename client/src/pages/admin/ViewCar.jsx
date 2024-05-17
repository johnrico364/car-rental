import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQueries, useQuery } from "@tanstack/react-query";

export const ViewCar = () => {
  const navigate = useNavigate();
  const { carData, set_carData } = useContext(AppContext);

  const [isModify, set_isModify] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Car name is required"),
    color: yup.string().required("Color of the car is required"),
    category: yup.string().required("Category is needed"),
    fare: yup
      .number()
      .integer()
      .min(500, "Fare most be profitable")
      .required("Fare price is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const refetchCarDateAPI = async () => {
    try {
      const { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/dashboard/view/${carData.car_id}`
      );
      set_carData(data.items[0]);
    } catch (error) {}
  };
  const updateCarAPI = async (newData) => {
    try {
      await axios.put(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/dashboard/view/${carData.car_id}`,
        newData
      );
      return true;
    } catch (error) {}
  };
  const removeCarAPI = async () => {
    try {
      await axios.delete(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/dashboard/view/${carData.car_id}`
      );
      return true;
    } catch (error) {}
  };

  const handleRemoveCar = async () => {
    const status = await removeCarAPI();
    status && navigate("/admin/dashboard");
  };
  const handleModifyCar = async (data) => {
    const status = await updateCarAPI(data);

    status && set_isModify(!isModify);
  };

  const carDetails = useQuery({
    queryKey: ["car", carData.car_id],
    queryFn: refetchCarDateAPI,
    refetchInterval: 2000,
  });

  return (
    <div className="route-height-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-5">
            <div className="d-flex justify-content-center mb-3">
              <div className="col-11 view-image"></div>
            </div>
            <div className="px-4">
              <div className="car-details mb-1">
                <b>ID:</b> {carData?.car_id}
              </div>
              <div className="car-details mb-1">
                <b>Name:</b> {carData?.name}
              </div>
              <div className="car-details mb-1">
                <b>Color:</b> {carData?.color}
              </div>
              <div className="car-details mb-1">
                <b>Category:</b> {carData?.category}
              </div>
              <div className="car-details">
                <b>Fare:</b> ₱ {carData?.fare}
              </div>
              <div className="row mt-4">
                <div className="col-6 px-3">
                  <button
                    className="regular-btn"
                    onClick={() => set_isModify(!isModify)}
                  >
                    {isModify ? "Cancel" : "Modify"}
                  </button>
                </div>
                <div className="col-6 px-3">
                  <button className="regular-btn" onClick={handleRemoveCar}>
                    Remove
                  </button>
                </div>
                <div className="col-12 text-end mt-3">
                  <i
                    className="bi bi-door-open-fill to-dashboard-btn"
                    onClick={() => navigate("/admin/dashboard")}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          {isModify && (
            <div className="col-5">
              <form onSubmit={handleSubmit(handleModifyCar)}>
                <div className="row px-3">
                  <div className="col-12 mb-3">
                    <div className="modify-form-label">Name:</div>
                    <input
                      type="text"
                      className="input-Container w-100"
                      defaultValue={carData?.name}
                      {...register("name")}
                    />
                    <span className="error-message">
                      {errors.name?.message}
                    </span>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="modify-form-label">Color:</div>
                    <input
                      type="text"
                      className="input-Container w-100"
                      defaultValue={carData?.color}
                      {...register("color")}
                    />
                    <span className="error-message">
                      {errors.color?.message}
                    </span>
                  </div>
                  <div className="col-5 mb-3">
                    <div className="modify-form-label">Category:</div>
                    <select
                      className="input-Container w-100"
                      {...register("category")}
                    >
                      <option selected disabled>
                        {carData?.category}
                      </option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Coupe</option>
                    </select>
                    <span className="error-message">
                      {errors.category?.message}
                    </span>
                  </div>
                  <div className="col-7"></div>
                  <div className="col-5 mb-5">
                    <div className="modify-form-label">Fare</div>
                    <input
                      type="number"
                      className="input-Container w-100"
                      defaultValue={carData?.fare}
                      {...register("fare")}
                    />
                    <span className="error-message">
                      {errors.fare?.message}
                    </span>
                  </div>
                  <div className="col-12">
                    <button className="regular-btn">Confirm</button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
