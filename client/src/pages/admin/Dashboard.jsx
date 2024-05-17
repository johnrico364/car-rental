import axios from "axios";
import "../styles/Admin-Styles.css";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { set_carData, carData } = useContext(AppContext);

  const [dashboardData, set_dashboardData] = useState({});

  const getDashboardCarsAPI = async () => {
    try {
      const { data: cars } = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/dashboard"
      );
      const { data } = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/admin/dashboard/data"
      );
      set_dashboardData(data);

      return cars.items;
    } catch (error) {}
  };
  const viewCar = (data) => {
    set_carData(data);
    navigate("/admin/dashboard/view");
  };

  const dashboardCars = useQuery({
    queryKey: ["cars"],
    queryFn: getDashboardCarsAPI,
  });
  return (
    <div className="route-height-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="row mt-2">
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">
                    Total Sales per day
                  </div>
                  <div className="dashboard-data-number">
                    {dashboardData?.sales}
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">Total Rented Cars</div>
                  <div className="dashboard-data-number">
                    {dashboardData?.rented_cars}
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">
                    Total Available Cars
                  </div>
                  <div className="dashboard-data-number">
                    {dashboardData?.available_cars}
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">Total Users</div>
                  <div className="dashboard-data-number">
                    {dashboardData?.users}
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-title">Cars up for grabs</div>
            <div className="dashboard-horizontal-line mt-1"></div>
            <div className="row dashboard-table mt-3">
              <div className="col-12">
                <div className="row my-2">
                  <div className="col-4 dashboard-table-title">Car Id</div>
                  <div className="col-2 dashboard-table-title">Car Name</div>
                  <div className="col-2 dashboard-table-title">Color</div>
                  <div className="col-2 dashboard-table-title">
                    Car Category
                  </div>
                  <div className="col-2 dashboard-table-title">
                    Fare per day
                  </div>
                </div>

                {dashboardCars.data?.map((car) => {
                  return (
                    <div className="row mb-2 dashboard-table-item">
                      <div className="col-4 dashboard-table-values">
                        {car?.car_id}
                      </div>
                      <div className="col-2 dashboard-table-values">
                        {car?.name}
                      </div>
                      <div className="col-2 dashboard-table-values">
                        {car?.color}
                      </div>
                      <div className="col-2 dashboard-table-values">
                        {car?.category}
                      </div>
                      <div className="col-1 dashboard-table-values ">
                        ₱ {car?.fare}
                      </div>
                      <div className="col-1 dashboard-table-values  text-end">
                        <button
                          className="view-btn"
                          onClick={() => viewCar(car)}
                        >
                          View
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
