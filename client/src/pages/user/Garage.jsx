import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Garage = () => {
  const getCarAPI = async () => {
    try {
      const { data } = await axios.get(
        "https://apex.oracle.com/pls/apex/jao_workspace/car-rental/car/garage"
      );
      return data.items;
    } catch (error) {
      console.log(error);
    }
  };

  const carData = useQuery({
    queryKey: ["cars"],
    queryFn: getCarAPI,
  });
  return (
    <div className="route-height-container animate__animated animate__backInUp">
      <div className="container-fluid">
        <div className="garage-title ps-4 pt-4">Cars up for grabs!</div>
        <div className="garage-items-container px-3 overflow-auto">
          <div className="row px-3 justify-content-center">
            {carData.isLoading && <h1>Loading...</h1>}
            {carData?.data?.map((car) => {
              return (
                <div className="card col-lg-3 m-2">
                  <img
                    src="/images/Car Images.jpg"
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body ">
                    <div className="card-text">
                      <b>Name:</b> {car?.name}
                    </div>
                    <div className="card-text">
                      <b>Color:</b> {car?.color}
                    </div>
                    <div className="card-text">
                      <b>Category:</b> {car?.category}
                    </div>
                    <div className="card-text">
                      <b>Fare:</b> ₱ {car.fare}/day
                    </div>
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
