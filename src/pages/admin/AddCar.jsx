import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const AddCar = () => {
  const navigate = useNavigate();
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

  const addCarAPI = async (new_car) => {
    try {
      await axios.post(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/car/add",
        new_car
      );
      return true;
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddCar = async (data) => {
    const status = await addCarAPI(data);
    status && navigate("/admin/dashboard");
  };

  return (
    <div className="route-height-container">
      <div className="container-fluid">
        <div className="add-car-title">
          Time to rev things up - let's add a car
        </div>
        <form onSubmit={handleSubmit(handleAddCar)}>
          <div className="row justify-content-center ">
            <div className="col-7">
              <div className="row">
                <div className="col-12 mt-4 mb-2 px-0">
                  <input
                    type="text"
                    className="input-Container w-100"
                    placeholder="Car Name"
                    {...register("name")}
                  />
                  <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="col-6 my-2 ps-0 pe-1">
                  <select
                    className="input-Container w-100"
                    {...register("category")}
                  >
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Coupe</option>
                  </select>
                  <span className="error-message">
                    {errors.category?.message}
                  </span>
                </div>
                <div className="col-6 my-2 ps-1 pe-0">
                  <input
                    type="text"
                    className="input-Container w-100"
                    placeholder="Color"
                    {...register("color")}
                  />
                  <span className="error-message">{errors.color?.message}</span>
                </div>
                <div className="col-12 my-2 px-0">
                  <input
                    type="number"
                    className="input-Container w-100"
                    placeholder="Fare per day"
                    defaultValue={0}
                    {...register("fare")}
                  />
                  <span className="error-message">{errors.fare?.message}</span>
                </div>
                <div className="col-12 my-2 px-0">
                  <button className="regular-btn" type="submit">
                    Add to Garage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
