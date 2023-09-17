import React from "react";
import partner1 from "../../img/team.jpg";
import partner2 from "../../img/team.jpg";

const CommunityPartner = () => {
  return (
    <div className="communityPartner d-flex justify-content-center align-items-center">
      <div className="image-container">
        <div className="first-image">
          <img className="object-fit hei" src={partner1} alt="" />
        </div>
        <div className="second-image">
          <img src={partner2} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="desc">
          <p>Lorem ipsum, dolor sit amet consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartner;
