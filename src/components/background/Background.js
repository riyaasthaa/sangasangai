import React from "react";
import "../background.css";
import shape from "../../img/shape-grid.png";

const Background = () => {
  return (
    // <div className="background d-flex justify-content-between ">
    //   <div className=" left ">
    //     <img src={shape} alt="" />
    //     <div className="box align-items-center justify-content-center"></div>
    //   </div>
    //   <div className=" right">
    //     <img src={shape} alt="" />
    //     <div className="box">
    //       <img src="" alt="" />
    //     </div>
    //   </div>
    //   <div className="center">

    //     </div>
    //   </div>
    // </div>
    <div className="background">
      <img className="img-left" src={shape} alt="" />
      <div className="content">
        <h2 className="heading">Background</h2>
        <div className="description">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            laboriosam mollitia ducimus voluptatibus distinctio harum ad
            expedita nihil. Doloremque perspiciatis iure autem sunt architecto,
            dolores error excepturi eos dignissimos dolorem reiciendis, alias
            voluptatibus eaque? Nostrum iusto tempore quia quod doloremque
            explicabo quae atque facilis, eveniet, similique impedit aspernatur
            consequuntur. In, laudantium id ipsa quisquam suscipit reprehenderit
            eum accusantium quis minus omnis
          </p>
        </div>
      </div>
      <img className="img-right" src={shape} alt="" />
    </div>
  );
};

export default Background;
