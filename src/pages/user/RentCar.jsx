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
            <div className="row">
              <div className="col-12 px-4">
                <div className="available-car-container overflow-auto ">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
