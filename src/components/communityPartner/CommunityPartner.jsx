import React from "react";
import communityPartner from "../../img/team.jpg";

const CommunityPartner = () => {
  return (
    <div className="communityPartner d-flex justify-content-center align-items-center">
      <div className="image-container">
        <div className="first-image">
          <img className="object-fit-cover" src={communityPartner} alt="" />
        </div>
        <div className="second-image">
          <img className="object-fit-cover" src={communityPartner} alt="" />
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
