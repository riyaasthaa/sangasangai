import "../css/CPActivities.css";
import CPA from "../img/team.jpg";

const CPActivities = () => {
  return (
    <div className="cp-activities container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={CPA} />
              <div className="item-title">
                <h3>
                  Child <br />
                  Advocacy
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={CPA} />
              <div className="item-title">
                <h3>
                  Child <br />
                  Advocacy
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={CPA} />
              <div className="item-title">
                <h3>
                  Child <br />
                  Advocacy
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpa-item">
              <img src={CPA} />
              <div className="item-title">
                <h3>
                  Child <br />
                  Advocacy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPActivities;
