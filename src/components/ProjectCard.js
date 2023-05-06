import { Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, link}) => {
  
  const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  return (
    <div className='prog' style={{ maxWidth: "600px" }}>
    <Col size={50} sm={6} md={4} >
    <Link to={link} onClick={handleClick}>
      <div className="proj-imgbx" >
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
      </div>
    </Link>
    </Col>
    </div>
    
  )
}
