import React from "react";
import communityPartner from "../../img/team.jpg";

const CommunityPartner = () => {
  return (
    <div
      id="communityPartner"
      className="communityPartner d-flex justify-content-center align-items-center"
    >
      <div className="image-container">
        <div className="first-image">
          <img className="object-fit-cover" src={communityPartner} alt="" />
        </div>
        <div className="second-image">
          <img className="object-fit-cover" src={communityPartner} alt="" />
        </div>
      </div>
      <div className="content">
        <h2 className="title">Community Partners</h2>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            deserunt quidem debitis placeat cum consequatur, praesentium
            distinctio cupiditate vitae eos architecto, reprehenderit autem
            incidunt perferendis
          </p>
        </div>
        <div className="tearfund-container">
          <div className="tearfund-items">
            <h4 className="title">Tearfund Nepal</h4>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                eveniet repudiandae voluptates aliquid magni optio assumenda ut
                nam temporibus velit?
              </p>
            </div>
          </div>
          <div className="tearfund-items">
            <div className="first"></div>
            <div className="second"></div>
            <h4 className="title">Micah Nepal</h4>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                eveniet repudiandae voluptates aliquid magni optio assumenda ut
                nam temporibus velit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartner;
