import axios from "axios";
import "../styles/Admin-Styles.css";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const RentList = () => {
  const navigate = useNavigate();

  const getRentedCar = async () => {
    try {
      const { data } = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/rent-list/:id"
      );
      return data.items;
    } catch (error) {}
  };
  const carReturnedAPI = async (id, car_return) => {
    try {
      await axios.put(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/rent-list/${id}`,
        car_return
      );
    } catch (error) {}
  };

  const handleReturnCar = async (id, carId) => {
    const toReturn = {
      carid: carId,
    };

    await carReturnedAPI(id, toReturn);
  };
  
  const rentList = useQuery({
    queryKey: ["car_rented"],
    queryFn: getRentedCar,
    refetchInterval: 1000,
  });

  return (
    <div className="route-height-container">
      <div className="container-fluid">
        <div className="rent-title">Rented Cars</div>
        <div className="horizontal-line"></div>
        <div className="row rented-values-container justify-content-center overflow-auto">
          <div className="col-11">
            <div className="row rented-values-title my-2">
              <div className="col-3">Rented By</div>
              <div className="col-2">Car Name</div>
              <div className="col-1">Category</div>
              <div className="col-1">Start</div>
              <div className="col-1">Return</div>
              <div className="col-1">Fare</div>
              <div className="col-1">Total Fare</div>
              <div className="col-2"></div>
            </div>

            {rentList.data?.map((car) => {
              const start = new Date(car.start_date);
              const returning = new Date(car.return_date);
              const rentalDays = Math.ceil(
                (returning - start) / (1000 * 60 * 60 * 24)
              );

              const total_fare = car.fare * rentalDays;
              console.log(car);
              return (
                <div className="row mb-2 rented-item">
                  <div className="col-3 rented-values">{car.id}</div>
                  <div className="col-2 rented-values">{car.name}</div>
                  <div className="col-1 rented-values">{car.category}</div>
                  <div className="col-1 rented-values">{car.start_date}</div>
                  <div className="col-1 rented-values">{car.return_date}</div>
                  <div className="col-1 rented-values">₱ {car.fare}/day</div>
                  <div className="col-1 rented-values">₱ {total_fare}</div>
                  <div className="col-2 text-end">
                    <button
                      className="returned-btn"
                      onClick={() => handleReturnCar(car.id, car.car_rented)}
                    >
                      Returned
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
