import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "../styles/Router-Styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RentCar = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);

  /* Data Variables */
  const [carName, set_carName] = useState("");
  const [carColor, set_carColor] = useState("");
  const [startDate, set_startDate] = useState("");
  const [returnDate, set_returnDate] = useState("");
  const [cars, set_cars] = useState([]);

  /* Error Responses */
  const [response, set_response] = useState("");
  const [nocar, set_nocar] = useState("");

  const searchCarAPI = async () => {
    /* Search car API */
    try {
      const { data } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/car/rent/${carName}/${carColor}`
      );
      return data.items;
    } catch (error) {
      console.log(error);
    }
  };
  const rentCarAPI = async (newRent) => {
    try {
      await axios.post(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/car/rent/:name/:color",
        newRent
      );
      return true;
    } catch (error) {}
  };

  const handleSearchCar = async () => {
    /* Search Car button */
  if (
    carName === "" ||
    carColor === "" ||
    startDate === "" ||
    returnDate === ""
  ) {
    set_response("Please fill in all the input fields.");
    return;
  }

  const currentDate = new Date();
  const selectedStartDate = new Date(startDate);
  const selectedReturnDate = new Date(returnDate);

  if (selectedStartDate < currentDate) {
    set_response("Please select a start date in the future.");
    return;
  }

  if (selectedStartDate > selectedReturnDate) {
    set_response("Invalid start and return date.");
    return;
  }

  const car = await searchCarAPI(); // call API
  const availableCars = car.filter((data) => {
    return data.rented === "no";
  });

  set_cars(availableCars);
  availableCars.length === 0 && set_nocar("No cars found.");
  };

  const handleRentCar = async (car_id) => {
    const to_rent = {
      rentedBy: userData?.user_id,
      carRented: car_id,
      startDate: startDate,
      returnDate: returnDate,
    };

    const status = await rentCarAPI(to_rent);
    status && navigate("/user/profile");
  };

  return (
    <div className="route-height-container animate__animated animate__backInUp">
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-10 px-0 pt-2">
            <div className="rent-car-title">Reserve your ride</div>
            <div className="error-message ps-3">{response}</div>
            <div className="row">
              <div className="col-6 ps-4 pe-2">
                <input
                  type="text"
                  className="input-Container w-100"
                  placeholder="Car Name"
                  onChange={(e) => {
                    set_carName(e.target.value);
                    set_response("");
                    set_nocar("");
                  }}
                />
              </div>
              <div className="col-6 ps-2 pe-4">
                <input
                  type="text"
                  className="input-Container w-100"
                  placeholder="Color"
                  onChange={(e) => {
                    set_carColor(e.target.value);
                    set_response("");
                    set_nocar("");
                  }}
                />
              </div>
              <div className="col-6 mt-3 ps-4 pe-2">
                <span className="rent-car-label">Start</span>
                <input
                  type="date"
                  className="input-Container w-100"
                  onChange={(e) => {
                    set_startDate(e.target.value);
                    set_response("");
                  }}
                />
              </div>
              <div className="col-6 mt-3 ps-2 pe-4">
                <span className="rent-car-label">Return</span>
                <input
                  type="date"
                  className="input-Container w-100"
                  onChange={(e) => {
                    set_returnDate(e.target.value);
                    set_response("");
                  }}
                />
              </div>
              <div className="col-12 px-4 mt-3">
                <button className="regular-btn" onClick={handleSearchCar}>
                  Hunt Down!
                </button>
              </div>
            </div>

            <div className="rent-car-title mt-3">Available Cars</div>
            <div className="row available-car-table justify-content-center overflow-auto px-3">
              <div className="col-12">
                <div className="row available-car-title">
                  <div className="col-3 available-car-values ps-5">Name</div>
                  <div className="col-2 available-car-values">Color</div>
                  <div className="col-2 available-car-values">Category</div>
                  <div className="col-2 available-car-values">Fare</div>
                  <div className="col-3 text-end"></div>
                </div>
                <div className="no-car-error">{nocar}</div>
                {cars?.map((car) => {
                  return (
                    <div className="row mt-2 available-car-items">
                      <div className="col-3 available-car-values">
                        <i className="bi bi-car-front-fill me-4"></i>
                        {car.name}
                      </div>
                      <div className="col-2 available-car-values">
                        {car.color}
                      </div>
                      <div className="col-2 available-car-values">
                        {car.category}
                      </div>
                      <div className="col-2 available-car-values">
                        ₱ {car.fare}
                      </div>
                      <div className="col-3 text-end">
                        <button
                          className="rent-button"
                          onClick={() => handleRentCar(car.car_id)}
                        >
                          Rent
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
