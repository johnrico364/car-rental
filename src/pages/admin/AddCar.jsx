export const AddCar = () => {
  return (
    <div className="route-height-container">
      <div className="container-fluid border">
        <div className="add-car-title">
          Time to rev things up - let's add a car
        </div>
        <div className="row justify-content-center ">
          <div className="col-7">
            <div className="row">
              <div className="col-12 mt-4 mb-2 px-0">
                <input
                  type="text"
                  className="input-Container w-100"
                  placeholder="Add Car"
                />
              </div>
              <div className="col-6 my-2 ps-0 pe-1">
                <select className="input-Container w-100">
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Coupe</option>
                </select>
              </div>
              <div className="col-6 my-2 ps-1 pe-0">
                <input
                  type="text"
                  className="input-Container w-100"
                  placeholder="Color"
                />
              </div>
              <div className="col-12 my-2 px-0">
                <input
                  type="number"
                  className="input-Container w-100"
                  placeholder="Fare per day"
                />
              </div>
              <div className="col-12 my-2 px-0">
                <button className="regular-btn">
                  Add to Garage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
