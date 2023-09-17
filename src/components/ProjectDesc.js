import "../css/ProjectDesc.css";
import shapeGrid from "../img/shape-grid.png";

const ProjectDesc = () => {
  return (
    <div id="project" className="project-desc-wrap">
      <div className="project-desc">
        <div className="shape"></div>
        <h2 className="heading">Project Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna
          eu ipsum facilisis tristique. Nullam vitae tincidunt nisl. Sed
          ultricies urna vel quam euismod, vel bibendum neque feugiat. Duis
          elementum nisi ut lacus lacinia
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna
          eu ipsum facilisis tristique. Nullam vitae tincidunt nisl. Sed
          ultricies urna vel quam euismod, vel bibendum neque feugiat. Duis
          elementum nisi ut lacus lacinia
        </p>
        <img src={shapeGrid} alt="shape" />
      </div>
    </div>
  );
};

export default ProjectDesc;
