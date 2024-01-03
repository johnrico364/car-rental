import "../styles/Admin-Styles.css";

export const RentList = () => {
  return (
    <div className="route-height-container">
      <div className="container-fluid">
        <div className="rent-title">Rented Cars</div>
        <div className="horizontal-line"></div>
        <div className="row rented-values-container justify-content-center overflow-auto">
          <div className="col-11">
            <div className="row my-2">
              <div className="col-4 rented-values-title">Rented By</div>
              <div className="col-2 rented-values-title">Car Name</div>
              <div className="col-1 rented-values-title">Category</div>
              <div className="col-1 rented-values-title">Start</div>
              <div className="col-2 rented-values-title">Return</div>
              <div className="col-2 rented-values-title">Fare</div>
            </div>
            <div className="row mb-2 rented-item">
              <div className="col-4 rented-values">
                0DE67425-BA30-CAE0-E063-1611A8C041FA
              </div>
              <div className="col-2 rented-values">Toyota Supra</div>
              <div className="col-1 rented-values">Sedan</div>
              <div className="col-1 rented-values">12-20-2020</div>
              <div className="col-2 rented-values">12-31-2020</div>
              <div className="col-2 rented-values">P 2000/day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
