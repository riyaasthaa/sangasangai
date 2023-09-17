import React from "react";
import "../background.scss";

const Background = () => {
  return (
    <div className="background d-flex justify-content-between mx-auto">
      <div className=" left ">
        <div className="box"></div>
      </div>
      <div className=" right">
        <div className="box"></div>
      </div>
      <div className="center">
        <div className="container justify-content-center mt-2">
          <h3 className="title">Background</h3>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              laboriosam mollitia ducimus voluptatibus distinctio harum ad
              expedita nihil. Doloremque perspiciatis iure autem sunt
              architecto, dolores error excepturi eos dignissimos dolorem
              reiciendis, alias voluptatibus eaque? Nostrum iusto tempore quia
              quod doloremque explicabo quae atque facilis, eveniet, similique
              impedit aspernatur consequuntur. In, laudantium id ipsa quisquam
              suscipit reprehenderit eum accusantium quis minus omnis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
