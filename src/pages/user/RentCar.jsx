import "../styles/Router-Styles.css";

export const RentCar = () => {
  return (
    <div className="route-height-container animate__animated animate__backInUp">
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-10 px-0 pt-2">
            <div className="rent-car-title">Reserve your ride</div>
            <div className="row">
              <div className="col-6 ps-4 pe-2">
                <input
                  type="text"
                  className="input-Container w-100"
                  placeholder="Car Name"
                />
              </div>
              <div className="col-6 ps-2 pe-4">
                <input
                  type="text"
                  className="input-Container w-100"
                  placeholder="Color"
                />
              </div>
              <div className="col-3 mt-3 ps-4 pe-2">
                <input type="date" className="input-Container w-100" />
              </div>
              <div className="col-3 mt-3 ps-2 pe-2">
                <input type="date" className="input-Container w-100" />
              </div>
              <div className="col-12 px-4 mt-3">
                <button className="regular-btn">Hunt Down!</button>
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
                <div className="row available-car-items">
                  <div className="col-3 available-car-values">
                    <i className="bi bi-car-front-fill me-4"></i>
                    Toyota Supra
                  </div>
                  <div className="col-2 available-car-values">Red</div>
                  <div className="col-2 available-car-values">Coupe</div>
                  <div className="col-2 available-car-values">P 3000</div>
                  <div className="col-3 text-end">
                    <button className="rent-button">Rent</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
