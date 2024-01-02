import { useContext } from "react";
import { AppContext } from "../../App";

export const ProfilePage = () => {
  const { userData } = useContext(AppContext);

  console.log(userData);

  return (
    <div className="route-height-container animate__animated animate__backInUp">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 profile-side text-center pt-4">
            <i class="bi bi-person-circle profile-icon"></i>
            <div className="profile-name">{userData?.first_name} {userData?.last_name}</div>
            <div className="profile-id">{userData?.user_id}</div>
            <div className="profile-gender">{userData?.gender}</div>
          </div>
          <div className="col-9 px-4 border">
            <div className="rent-car-title pt-5">Reserved Titles</div>
            <div className="row reserved-car-container mt-4">
              <div className="col-12 px-4">
                <div className="row pt-1 car-values-title">
                  <div className="col-4">Book Id</div>
                  <div className="col-2">Car</div>
                  <div className="col-2">Start</div>
                  <div className="col-2">Return</div>
                  <div className="col-2">Rate/day</div>
                </div>
                <div className="row mt-2 car-values-container">
                  <div className="col-4 car-values">
                    1DFSR14-F352DFSDF-34234FSDF-234234
                  </div>
                  <div className="col-2 car-values">Toyota Supra</div>
                  <div className="col-2 car-values">12-32-2024</div>
                  <div className="col-2 car-values ">12-32-2024</div>
                  <div className="col-2 car-values">P 2000/day</div>
                </div>
                <div className="row mt-2 car-values-container">
                  <div className="col-4 car-values">
                    1DFSR14-F352DFSDF-34234FSDF-234234
                  </div>
                  <div className="col-2 car-values">Toyota Supra</div>
                  <div className="col-2 car-values">12-32-2024</div>
                  <div className="col-2 car-values ">12-32-2024</div>
                  <div className="col-2 car-values">P 2000/day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
