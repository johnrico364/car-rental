import "../styles/Admin-Styles.css";

export const Dashboard = () => {
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
                  <div className="dashboard-data-number">10000</div>
                </div>
              </div>
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">Total Rented Cars</div>
                  <div className="dashboard-data-number">10000</div>
                </div>
              </div>
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">
                    Total Available Cars
                  </div>
                  <div className="dashboard-data-number">10000</div>
                </div>
              </div>
              <div className="col-3">
                <div className="dashboard-data">
                  <div className="dashboard-data-title">Total Users</div>
                  <div className="dashboard-data-number">10000</div>
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
                  <div className="col-2 dashboard-table-title">
                    Car Category
                  </div>
                  <div className="col-2 dashboard-table-title">Color</div>
                  <div className="col-2 dashboard-table-title">
                    Fare per day
                  </div>
                </div>
                <div className="row mb-2 dashboard-table-item">
                  <div className="col-4 dashboard-table-values">
                    0DE67425-BA30-CAE0-E063-1611A8C041FA
                  </div>
                  <div className="col-2 dashboard-table-values">
                    Toyota Supra
                  </div>
                  <div className="col-2 dashboard-table-values">Sedan</div>
                  <div className="col-2 dashboard-table-values">Red</div>
                  <div className="col-2 dashboard-table-values">P 2000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
