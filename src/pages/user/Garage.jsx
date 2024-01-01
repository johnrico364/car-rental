export const Garage = () => {
  return (
    <div className="route-height-container animate__animated animate__backInUp">
      <div className="container-fluid">
        <div className="garage-title ps-4 pt-4">Cars up for grabs!</div>
        <div className="garage-items-container px-3 overflow-auto">
          <div className="row px-3 justify-content-center">
            <div className="card col-lg-3 m-2">
              <img
                src="/images/Car Images.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <div className="card-text">
                  <b>Name:</b> Toyota Supra
                </div>
                <div className="card-text">
                  <b>Fare:</b> P 2000/day
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
