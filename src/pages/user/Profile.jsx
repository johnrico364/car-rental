import { useContext, useState } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ProfilePage = () => {
  const { userData } = useContext(AppContext);

  const [isInfo, set_isInfo] = useState(false);
  const [carInfo, set_carInfo] = useState({});

  const getBooketCarAPI = async () => {
    try {
      const { data: rented } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/car/profile-booked/${userData?.user_id}`
      );
      return rented.items;
    } catch (error) {}
  };
  const getInfoAPI = async (id) => {
    try {
      const { data: info } = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/car-rental/car/profile-booked/car-info/${id}`
      );
      set_carInfo(info.items[0]);
    } catch (error) {}
  };

  const handleGetInfo = async (car_id) => {
    set_isInfo(!isInfo);
    await getInfoAPI(car_id);
  };

  const rented_cars = useQuery({
    queryKey: ["rented", "cars"],
    queryFn: getBooketCarAPI,
  });
  return (
    <div className="route-height-container animate__animated animate__backInUp">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 profile-side text-center pt-4">
            <i class="bi bi-person-circle profile-icon"></i>
            <div className="profile-name">
              {userData?.first_name} {userData?.last_name}
            </div>
            <div className="profile-id">{userData?.user_id}</div>
            <div className="profile-gender">{userData?.gender}</div>
          </div>

          <div className="col-9 px-4 border">
            <div className="rent-car-title">Reserved Rides</div>
            <div className="row reserved-car-container">
              <div className="col-12 px-4">
                <div className="row pt-1 car-values-title">
                  <div className="col-3">Rent Id</div>
                  <div className="col-3">Rented Car Id</div>
                  <div className="col-2">Start</div>
                  <div className="col-2">Return</div>
                  <div className="col-2"></div>
                </div>
                {rented_cars?.data?.map((booked) => {
                  return (
                    <div className="row mt-2 car-values-container">
                      <div className="col-3 car-values">{booked.id}</div>
                      <div className="col-3 car-values">
                        {booked.car_rented}
                      </div>
                      <div className="col-2 car-values">
                        {booked.start_date}
                      </div>
                      <div className="col-2 car-values ">
                        {booked.return_date}
                      </div>
                      <div className="col-2 text-end">
                        <button
                          className="info-button"
                          onClick={() => handleGetInfo(booked.car_rented)}
                        >
                          Info
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rent-car-title">Car info:</div>
            {isInfo && (
              <div className="row px-3 car-info-container">
                <div className="col-8">
                  <div className="row info-values mt-3">
                    <div className="col-6 mt-3">
                      <b>Name:</b> {carInfo?.name}
                    </div>
                    <div className="col-6 mt-3">
                      <b>Category:</b> {carInfo?.category}
                    </div>
                    <div className="col-6 mt-3">
                      <b>Color:</b> {carInfo?.color}
                    </div>
                    <div className="col-6 mt-3">
                      <b>Fare/day:</b> ₱ {carInfo?.fare}
                    </div>
                  </div>
                </div>
                <div className="col-4 info-picture"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
